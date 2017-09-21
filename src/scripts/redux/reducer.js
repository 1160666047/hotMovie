
//第一个参数可以设置状态的默认值，主要需要返回状态,返回值是什么，状态就是什么

const reducer = (state={num:1,title:'卖座电影',listId:'3841'},action)=>{
	
	switch(action.type){ //CHANGE_URLID
		case 'CHANGE_TITLE':
			state.title=action.title;
			return state;
			break;
		case 'CHANGE_URLID':
			state.listId=action.listId;
			return state;
			break;
		default :
			console.log('1.store里挂载了数据')
			return state;
			break;
		
	}
	
}

export default reducer