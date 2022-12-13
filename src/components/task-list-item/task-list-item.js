import React from "react";

import './task-list-item.css';

const DeleteButton = ({onItemDelete}) => {
    return(
        <button className="delete-btn list-item-btn" title="Delete Activity" onClick={onItemDelete}>
            <i className="fa fa-trash-o" />
        </button>
    )
}
const MoveToDoneButton = ({onStatusChange}) => {
    return(
        <button className="done-btn list-item-btn" title="Move Activity To Done" onClick={onStatusChange}>
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
        </button>
    )
}
const MoveToInProgressButton = ({onStatusChange}) => {
    return(
        <button className="inprogress-btn list-item-btn" title="Move Activity To InProgress" onClick={onStatusChange}>
            <i className="fa fa-play" aria-hidden="true"></i>
        </button>
    )
}
const MoveToTodoButton = ({onStatusChange}) => {
    return(
        <button className="todo-btn list-item-btn" title="Move Activity To ToDo" onClick={onStatusChange}>
            <i className="fa fa-fast-backward" aria-hidden="true"></i>
        </button>
    )
}

const TaskListItem = ({label, item, onItemDelete, onStatusChange}) => {

    if(label==='ToDo'){
        return(
            <>
                {item.title}
                <DeleteButton onItemDelete={onItemDelete}/>
                <MoveToDoneButton onStatusChange={() => onStatusChange('done')}/>
                <MoveToInProgressButton onStatusChange={() => onStatusChange('inProgress')}/>
            </>
        )
    }
    if(label==='InProgress'){
        return(
            <>
                {item.title}
                <DeleteButton onItemDelete={onItemDelete}/>
                <MoveToDoneButton onStatusChange={() => onStatusChange('done')}/>
                <MoveToTodoButton onStatusChange={() => onStatusChange('todo')}/>
            </>
        )
    }
    if(label==='Done'){
        return(
            <>
                {item.title}
                <DeleteButton onItemDelete={onItemDelete}/>
                <MoveToInProgressButton onStatusChange={() => onStatusChange('inProgress')}/>
                <MoveToTodoButton onStatusChange={() => onStatusChange('todo')}/>
            </>
        )
    }
}

export default TaskListItem;