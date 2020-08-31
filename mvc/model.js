class List {
    constructor(params) {
        this.title = params.title
        this.issues = params.issues
        this.id = Date.now().toString()
    }
    
}

class Task extends List {
    constructor(params) {
        super(params)
        this.name = params.name
        this.text = params.text
        this.id = Date.now().toString()
    }
}