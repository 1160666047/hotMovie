

import $ from 'jquery'
import store from '../flux/store'
import AsideLeftComponent from './AsideLeftComponent'

import store_redux from '../redux/store'
import actions from '../redux/actions'
class HeadComponent extends React.Component {   
    constructor(props,context){
        console.log($)
        super(props,context)

        this.state={
            todos:store.getAll(),
            title:store_redux.getState().title
        }
    }
    flayleft(){
        this.refs.header_son_aside.isshowChange()
        
    }
    render(){
        return (
            <div className="hot__movie__header">
                <div className="hot__header">
                    <span onClick={this.flayleft.bind(this)}><img src="./img/aaa.gif"/>
                    </span><span>{this.state.title}</span><span><a href="#/where">{this.state.todos}</a></span>
                    <span><a href="#/mine"><img src="./img/headerb.gif"/></a></span>
                </div>
                <AsideLeftComponent ref="header_son_aside"/>
            </div>
        )
    }
    componentDidMount(){//访问已经渲染的真是dom
        let that=this
        store.addChangeListener(()=>{
            this.setState({todos:store.getAll()})
        })
        store_redux.subscribe(()=>{
			that.setState({
				title:store_redux.getState().title
			})
		})
    }
}
//定义默认属性
HeadComponent.defaultProps={

}



export default HeadComponent