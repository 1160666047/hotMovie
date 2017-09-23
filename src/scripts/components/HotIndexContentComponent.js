


import $ from 'jquery'
import store from '../flux/store'
import actions from '../flux/actions'
import Fetch from '../modules/fetch'
import {Link} from 'react-router'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'

import {connect} from 'react-redux'

class HotIndexContentComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            //lb_arr:[],
            swiper:null
        }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
       // this.getLunboDate()
       actions_redux.changeTitle("影片")
        console.log(this.props,11111111111111111111111111)
    }
    
   
    makeListUrl(item){
        actions_redux.changeListUrlId(item.id) 

    }
    changUrl(){
       
        console.log(this.props.showWhat.url,'what this')
        this.props.changeUserInfo({url:this.props.showWhat.url,showHow:this.props.showWhat.showHow})
        
    }
    showLbData(){
        let arr=[]
        this.props.lb_arr.forEach((item,i)=>{
            console.log(item)
            arr.push(<div className="hot__content" onClick={this.makeListUrl.bind(this,item)}>
                <a href="#/list"><img src={item.cover.origin}/>
                <div>
                    <p><span>{item.name}</span>
                    <span>{item.intro}</span></p>
                    <p class="myspan">{item.grade}</p>
                </div>
                </a>
                    
                </div>)
        })
         return arr
    }
    render(){//onClick={alert(this.props.showWhat.url)}
        return (
            <div className="hot__content--farther">
               <div className="hot__content">
               {this.showLbData()}
              <Link to="/movie">  <p className="myp" onClick={this.changUrl.bind(this)}>{this.props.showWhat.btnVal}</p> </Link>
               </div>
                
            </div>
        )
    }
    componentDidMount(){
        
        
    }
    componentDidUpdate(){
        let that = this
    }

}
//定义默认属性
HotIndexContentComponent.defaultProps={

}

const mapDispatchToProps = (dispatch)=>{
	return {
		changeUserInfo:(info)=>{
			dispatch({type:'CHANGE_MOVIESHOW_URL',info:info})
		}
	}
}


export default connect(state=>state,mapDispatchToProps)(HotIndexContentComponent)