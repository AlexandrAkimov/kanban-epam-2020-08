let dataMock = [];
const controllerCreateList = newNameList => {
    dataMock = getData();
    dataMock.unshift(new List({ title: newNameList, issues: [] }))
    setData(dataMock);
    render(dataMock, dataMock.activeTasks(), dataMock.finishedTasks())
}

const controllerCreateTask = ({listName, taskName, taskDescription}) => {
    dataMock = getData();
    const task = new Task({ title: listName, name: taskName, text: taskDescription })
    dataMock.map(list => list.title === task.title ? list.issues.push(task) : null);
    setData(dataMock);
    render(dataMock, dataMock.activeTasks(), dataMock.finishedTasks())
}

const controllerMoveTask = taskId => {
    dataMock = getData();
    let index
    dataMock.forEach((list, idx) => {
        if(list.issues.some(t => +t.id === +taskId)) {
            index = idx
        }
    })
    const targetTask = dataMock[index].issues.find(t => t.id === taskId);
    dataMock[index].issues = dataMock[index].issues.filter(t => t.id !== taskId);
    dataMock[index+1].issues.push(targetTask);
    setData(dataMock);
    render(dataMock, dataMock.activeTasks(), dataMock.finishedTasks())
}

const controllerUpdateList = (id, newName) => {
    dataMock = getData()
    dataMock.map(list => list.id == id ? list.title = newName : null);
    setData(dataMock);
    render(dataMock, dataMock.activeTasks(), dataMock.finishedTasks())
}

const controllerRemoveList = id => {
    dataMock = getData().filter(list => +list.id !== id);
    setData(dataMock);
    render(dataMock, dataMock.activeTasks(), dataMock.finishedTasks())
}



