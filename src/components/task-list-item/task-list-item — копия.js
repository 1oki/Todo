import React, { Component } from "react";


import TaskListService from "../../services/task-list-service";

import './task-list-item.css';

export default class TaskListItems extends Component {
    
    taskListService = new TaskListService();
    
    state = {
        loading: true
    };

    componentDidMount() {
        console.log('TaskListItems did mount')
        this.setState({
            loading: false
        })
    }

    onDelete = async (key) => {
        this.setState({
            loading: true
        })
        await this.taskListService.removeActivityFromDb(key)
    }

    deleteItem = async (key) => {
        await this.onDelete(key).then(() => {
            console.log('deletion complite')
            this.setState({loading: false})
        })
    }

    render() {

        const { itemList, label } = this.props;

        if (this.state.loading) {
            return "Loading..."
        }

        const changeStatus = () => {
            if(label ==='todo'){}
        }

        const moveToDoneBtn = () => {};
        const moveToInProgressBtn = () => {};
        const moveToTodoBtn = () => {};
        const deleteBtn = () => {};
        return(
            Object.entries(itemList)
                .map(([key, item]) => {

                    return (
                        <li className="list-item" key={key}>
                            {item.title}
                            <button className="list-item-btn ">
                                InPr
                                {/* <i className="bi bi-chevron-right"/> */}
                            </button>
                            <button className="list-item-btn ">
                                D
                                {/* <i className="fa-solid fa-angles-right" /> */}
                            </button>
                            <button className="list-item-btn " onClick={this.deleteItem}>
                                <i className="fa fa-trash-o" />
                            </button>
                        </li>
                    )
            })
        )
    }
}

const TaskListItem = ({itemList}) => {

    const renderItems = (itemList) => {
        
        return (
            Object.entries(itemList)
                .map(([key, item]) => {

                    return (
                        <li className="list-item" key={key}>
                            {item.title}
                            <button className="delete-btn ">
                                <i className="fa fa-trash-o" />
                            </button>
                        </li>
                    )
            })
        )
    }
        
    return(
        renderItems(itemList)
    )
};

//export default TaskListItem;