

const EventEmitter = require("events").EventEmitter
const store = Object.assign({},EventEmitter.prototype,{
    todos:{city:'北京',id:'12'},
    getAll(){
		return this.todos.city
    },
    //初始化获取经纬度信息
    getUserLaLo(){
        navigator.geolocation.getCurrentPosition((position)=>{
            alert(1)
        },(msg)=>{ alert(2); console.log(msg.code, msg.message);})
    },
    addNew(title){
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
        console.log(this.todos.city,this.todos.id)
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