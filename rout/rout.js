const id = window.location.href.split('#').reverse()[0]
const data = getData();
const targetTask = {}
data.forEach(list => {
    list.issues.forEach(t => {
        if (t.id === id) {
            targetTask.name = t.name,
            targetTask.text = t.text,
            targetTask.id = t.id
        }
    })
});
const date = new Date(+targetTask.id);
const dateFormat = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric',
    hour: 'numeric', 
    minute: 'numeric'
})
document.getElementsByClassName('kanban__name__task')[0].innerHTML = targetTask.name
document.getElementsByClassName('kanban__date__task')[0].innerHTML = dateFormat.format(date)
document.getElementsByClassName('kanban__description')[0].innerHTML = targetTask.text
