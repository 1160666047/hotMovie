

const EventEmitter = require("events").EventEmitter
const store = Object.assign({},EventEmitter.prototype,{
    todos:'北京',
    getAll(){
		console.log(this)
		return this.todos
		//return "aaa"
    },
    addNew(title){
        // this.count++;
        // this.todos.push({
        //     id:this.count,
        //     title,
        //     isFinished:false
        // })
        // console.log('6.store方法被调用之后更改数据，然后触发事件')
		// this.emit("todos-change")
		this.todos=title
		this.emit("todos-change")
    },
    // finishTodo(id){
    // 	for(var i =0;i<this.todos.length;i++){
    // 		if(this.todos[i].id==id){
    // 			this.todos[i].isFinished=!this.todos[i].isFinished
    // 			break;
    // 		}
    // 	}
    // 	this.emit("todos-change")
    // 	localStorage.todos=JSON.stringify(this.todos)
	// },
	changeTodo(newTodo){
		this.todos=newTodo
		console.log("asdadadadasfdagsa")
		this.emit("todos-change")
	},
    removeTodo(){
    	// for(var i =0;i<this.todos.length;i++){
    	// 	if(this.todos[i].id==id){
    	// 		this.todos.splice(i,1)
    	// 		break;
    	// 	}
    	// }
    	// this.emit("todos-change")
		// localStorage.todos=JSON.stringify(this.todos)
		this.todos=""
		this.emit("todos-change")
    },
    addChangeListener(callback){
    	
        this.on("todos-change",callback)
    }
})


export default store