

import $ from 'jquery'
import store from '../flux/store'
import AsideLeftComponent from './AsideLeftComponent'
class HeadComponent extends React.Component {   
    constructor(props,context){
        console.log($)
        super(props,context)

        this.state={
            todos:store.getAll(),
            hh:'ss'
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
                    </span><span>卖座电影</span><span><a href="#/where">{this.state.todos}</a></span>
                    <span><a href="#/mine"><img src="./img/headerb.gif"/></a></span>
                </div>
                <AsideLeftComponent ref="header_son_aside"/>
            </div>
        )
    }
    componentDidMount(){//访问已经渲染的真是dom
        store.addChangeListener(()=>{
            console.log("SUCCESS")
            console.log(store.getAll())
            this.setState({todos:store.getAll()})
        })
    }
}
//定义默认属性
HeadComponent.defaultProps={

}



export default HeadComponent