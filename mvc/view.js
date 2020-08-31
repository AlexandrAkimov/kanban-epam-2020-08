const openForm = el => {
    el.style.display = 'none';
    document.getElementsByClassName('form__backlog')[0].style.display = 'block';
}

const createTask = () => {
    if (document.getElementById('name__task').value) {
        const objectTask = {
            listName: document.getElementsByClassName('kanban__note__title')[0].textContent,
            taskName: document.getElementById('name__task').value,
            taskDescription: document.getElementById('description__task').value,
        }
        controllerCreateTask(objectTask);
        document.getElementsByClassName('form__backlog')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('error__new__task')[0].style.display = 'block';
        return
    }
    
}

const createPrepareList = el => {
    const prepareList = el.parentNode.previousSibling.children[1].children[0].innerHTML;
    el.insertAdjacentHTML('beforebegin', `
        <nav class="kanban__note__nav form__progress form__prepare">
            <hr>
            <ul class="list list__prepare">
                ${prepareList}
            </ul>   
        </nav>`
    );
    el.previousSibling.children[1].addEventListener('click', e => {
        controllerMoveTask(e.target.id)
    })
}

document.getElementsByClassName('header__button')[0].addEventListener('click', () => {
    modal('create', 'createList', 'Enter name list', 'add')
    document.getElementsByClassName('modal')[0].style.display = 'flex';
})
const createList = () => {
    const newNameList = document.getElementById('input__name__list');
    if (newNameList.value) {
        controllerCreateList(newNameList.value);
        document.getElementsByClassName('modal')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('error__new__list')[0].style.display = 'block';
        return
    }
    newNameList.value = '';
}

const openEditForm = (idList, title) => {
    modal('update', 'updateList', 'Enter name list', 'save', idList, title);
    document.getElementsByClassName('modal')[0].style.display = 'flex';
}

const closeModal = () => {
    document.getElementsByClassName('modal')[0].style.display = 'none';
}

const updateList = idList => {
    if (document.getElementById('input__name__list').value) {
        document.getElementsByClassName('error__new__list')[0].style.display = 'none'
        controllerUpdateList(idList, document.getElementById('input__name__list').value);
        document.getElementsByClassName('modal')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('error__new__list')[0].style.display = 'block'
        return
    }

}

const deleteList = idList => {
    controllerRemoveList(idList)
}

const modal = (textSubmit, funcSubmit, textError, iconSubmit, idList = null, valueName = null) => {
    document.getElementsByClassName('modal')[0].innerHTML = `<div class="form__modal">
    <input type="text" id="input__name__list" class="input__backlog new__name__list" placeholder="Enter name list" 
    value="${valueName}" autofocus>
    <div class="form__modal__controls">
        <button class="note__control submit__create" onclick="${funcSubmit}(${idList})">
            <span>${textSubmit}</span>
            <i class="material-icons">${iconSubmit}</i>
        </button>
        <button class="note__control" onclick="closeModal()">
            <span>close</span>
            <i class="material-icons">close</i>
        </button>
    </div>
    <small class="error__new__list">${textError}</small>
</div>`
}

const openCtxList = el => {
    el.nextElementSibling.style.display = 'flex'
}
const toRout = (id, el) => {
    if (!el.parentNode.classList.contains('list__prepare')) {
        window.location.href = `./rout/routing.html#${id}`
    }
}
let flagOpen = false;
const openProfile = el => {
    flagOpen = !flagOpen;
    if (flagOpen) {
        el.textContent = 'expand_less'
        el.nextElementSibling.style.display = 'block'
    } else {
        el.textContent = 'expand_more'
        el.nextElementSibling.style.display = 'none'
    }

}
document.addEventListener('load', render(getData(), getData().activeTasks(), getData().finishedTasks()))



















