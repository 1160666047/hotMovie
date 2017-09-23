

import store from './store'
const actions = {
	addNumber(){
		console.log('4.actions的方法触发之后创建带有标识属性的action对象，调用store.dispatch方法，交由reducer来处理')
		let action = {
			type:'ADD_NUMBER'
		}
		store.dispatch(action)
	},
	
	changeUserInfo(info){
		store.dispatch({
			type:'CHANGE_MOVIESHOW_URL',
			info:info
		})
	},
	
	//修改页面标题的方法

	changeTitle(new_title){
		let action = {
			type:'CHANGE_TITLE',
			title:new_title
		}
		store.dispatch(action)
	},
	changeListUrlId(new_Id){
		console.log(new_Id)
		let action = {
			type:'CHANGE_URLID',
			listId:new_Id
		}
		store.dispatch(action)
	}
}

export default actions