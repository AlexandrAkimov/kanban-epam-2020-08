Array.prototype.finishedTasks = function () {
    return this.length < 2 ? 0 : this[this.length - 1].issues.length;
}
Array.prototype.activeTasks = function () {
    if (this.length) {
        return this[0].issues.length;
    }
    return 0
}
