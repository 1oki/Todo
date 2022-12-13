import React from "react";

import TaskListItem from "../task-list-item";

import './task-list.css'

const TaskList = ({taskList, label, onItemDelete, onStatusChange}) => {

    let className = "task-list ";

    const listItems = Object.entries(taskList)
        .map(([key, item]) => {
            return (
                <li className="list-item" key={key}>
                    <TaskListItem 
                        item = {item} 
                        label={label} 
                        onItemDelete={() => onItemDelete(key)}
                        onStatusChange={(newStatus) => onStatusChange(key, newStatus)}/> 
                </li>
            )
    })

    return(
        <div className={className + label}>
            <h3>{label}</h3>
            <ul>
                { listItems }
            </ul>
        </div>
    )
}

export default TaskList;