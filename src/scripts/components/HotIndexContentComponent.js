


import $ from 'jquery'
import store from '../flux/store'
import actions from '../flux/actions'
import Fetch from '../modules/fetch'

import store_redux from '../redux/store'
import actions_redux from '../redux/actions'

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
        
    }
    
   
    makeListUrl(item){
        actions_redux.changeListUrlId(item.id) 

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
    render(){
        return (
            <div className="hot__content--farther">
               <div className="hot__content">
               {this.showLbData()}
               <p className="myp">更多即将上映电影</p>
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



export default HotIndexContentComponent