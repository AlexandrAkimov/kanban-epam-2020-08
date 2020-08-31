function render(data, activeTasks = 0, finishedTasks = 0) {
    const form = `<form onsubmit="return false" class="form__backlog">
<label for= "name__task">Task name</label>
    <input type="text" id="name__task" class="input__backlog" required>
        <label for="description__task">Description</label>
        <textarea
            name="description"
            cols="30"
            rows="3"
            id="description__task"
            class="textarea__backlog"
        >
        </textarea>
        <small class="error__new__task">Enter name of task</small>
        <button class="note__control" id="submit__form" onclick="createTask(this)"><i class="material-icons">add</i><span>Add card</span></button>
</form>
<button class="note__control" id="btn__open__form" onclick="openForm(this)"><i class="material-icons">add</i><span>Add card</span></button>`
    const btnSubmit = `<button onclick="createPrepareList(this)" class="note__control submit__backlog"><i class="material-icons">add</i><span>Add card</span></button>`
    if (data.length) {
        let lists = '';
        const tasks = [];
        data.forEach((list, idx) => {
            lists +=
                `<article id="${list.id}" class="kanban__note__unit">
                    <div class="article__header">
                        <p class="kanban__note__title">${list.title}</p>
                        <div class=context__menu>
                            <i class="material-icons more__horiz" onclick="openCtxList(this)" title="edit / delete">more_horiz</i>
                            <div class="context__controls">
                                <i class="material-icons edit" onclick="openEditForm(${list.id}, '${list.title}')" title="edit">edit</i>
                                <i class="material-icons delete" onclick="deleteList(${list.id})" title="delete">delete</i>
                            </div>
                        </div>
                    </div>
                    <nav class="kanban__note__nav">
                        <ul class="list" id="list__backlog">
                        </ul>
                    </nav>
                    ${!idx ? form : data[idx - 1].issues.length ? btnSubmit : ''}
                </article>`;
            let issues = [];
            list.issues.forEach(task => {
                issues.push(`<li id="${task.id}" onmousedown="dragDrop(this)" onclick="toRout(${task.id}, this)" class="list__item">${task.name}</li> `)
            })
            tasks.push(issues)
        });
        document.getElementsByClassName('kanban__tasks')[0].innerHTML = lists;
        tasks.forEach((el, idx) => {
            document.getElementsByClassName('list')[idx].innerHTML = el.join('')
        })
    } else {
        document.getElementsByClassName('kanban__tasks')[0].innerHTML = `<p style = "color: #fff">
                No task lists yet. Please create new list</p> `
    }
    document.getElementsByClassName('active__num')[0].innerHTML = activeTasks
    document.getElementsByClassName('finished__num')[0].innerHTML = finishedTasks
}