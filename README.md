

<App/>
    <AppHeader />
      <Content />
        <ItemAddForm onActivityAdded = {this.addActivity}/>
        <TaskList label='ToDo' taskList={todoList}/>
        <TaskList label='InProgress' taskList={inProgressList}/>
        <TaskList label='Done' taskList={doneList}/>
        <TaskList label='OnHold' taskList={onHoldList}/>
            <TaskListItems itemList={taskList} label={label}/>