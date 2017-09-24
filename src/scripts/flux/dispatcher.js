


const Dispatcher = require("flux").Dispatcher

const dispatcher = new Dispatcher()
import store from './store'
dispatcher.register((action)=>{
	switch(action.type){
		case 'CHANGE_POSITION_INFO':
			store.changeTodo(action.info)
		break;
		default:
		break;
	}
})

export default dispatcher