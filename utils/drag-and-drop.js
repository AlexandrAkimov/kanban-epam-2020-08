const dragDrop = el => {
    el.draggable = true;
    const dropZone = el.parentNode.parentNode.parentNode.nextElementSibling;
    
    el.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/html', 'dragstart')
    })

    dropZone.addEventListener('dragover', e => {
        e.preventDefault()
    })

    dropZone.addEventListener('drop', e => {
        e.preventDefault();
        controllerMoveTask(el.id)
    })
    
    el.addEventListener('dragend', e => {
        render(getData(),  getData().activeTasks(), getData().finishedTasks())
    })
}