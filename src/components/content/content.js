import React, { Component } from "react";

import TaskList from "../task-list";
import TaskListService from "../../services/task-list-service";
import ItemAddForm from "../item-add-form";

import './content.css'

export default class Content extends Component  {
  
  taskListService = new TaskListService();

  state = {
    taskList: {
      0:{
          title: 'Be happy',
          status: 'todo'
      },
      1:{
          title: 'Develop',
          status: 'inProgress'
      },
      2:{
          title: 'Meditate',
          status: 'done'
      }
  },
    loading: true
  }
  
  componentDidMount = () => {
    this.taskListService.getDbSnapshot()
      .then((snapshot) => {
        this.setState({
            taskList: snapshot,
            loading: false
        });
      })  
  }

  getSnaphotsByStatus = (status) => {
    const filter = Object.entries(this.state.taskList).filter(([, value]) => value.status === status)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value}), {})
    return filter;
  }

  getTodoList =  () => this.getSnaphotsByStatus('todo');
  
  getInProgressList =  () => this.getSnaphotsByStatus('inProgress');
    
  getDoneList =  () => this.getSnaphotsByStatus('done');

  getOnHoldList =  () => this.getSnaphotsByStatus('onHold');

  addTask = (taskTitle) => { 
    const newTaskKey = this.taskListService.addTaskToDb(taskTitle)

    this.setState(({taskList}) => {
      const newTaskList = {...taskList};
      newTaskList[newTaskKey] = {
        title: taskTitle,
        status: 'todo'
      };
      return {
        taskList: newTaskList
      }
    })
    
  }

  deleteItem = (key) => {
    this.setState(({taskList}) => {
      const { [key]: removedProperty, ...remainTaskList} =  taskList; 
      return { 
        taskList: remainTaskList
      }
    })
    this.taskListService.removeTaskFromDb(key)
  }

  onStatusChange = (key, newStatus) => {
    this.setState(({taskList}) => {
      const newTaskList = {...taskList};
      newTaskList[key].status = newStatus;
      return {
        taskList: newTaskList
      }
    })
    this.taskListService.updateTaskStatus(key, newStatus)
  }

  render(){
    const todoList = this.getTodoList();
    const inProgressList = this.getInProgressList();
    const doneList = this.getDoneList();

    if (this.state.loading) {
      return(
        <div className="container">
          <div className="content">
            Loading...
          </div>
        </div>)
    }

    return (
      <div className="container">
        <div>
          <ItemAddForm onActivityAdded = {this.addTask}/>
        </div>
        <div className="content">
          <TaskList label='ToDo' taskList={todoList} onItemDelete={(key) => this.deleteItem(key)} onStatusChange={(key, newStatus) => this.onStatusChange(key, newStatus)}/>
          <TaskList label='InProgress' taskList={inProgressList} onItemDelete={(key) => this.deleteItem(key)} onStatusChange={(key, newStatus) => this.onStatusChange(key, newStatus)}/>
          <TaskList label='Done' taskList={doneList} onItemDelete={(key) => this.deleteItem(key)} onStatusChange={(key, newStatus) => this.onStatusChange(key, newStatus)}/>
        </div>
      </div>
    )
  }
};
