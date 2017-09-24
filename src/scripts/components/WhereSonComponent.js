

import $ from 'jquery'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'

class WhereSonComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentDidUpdate(props,state){
        // alert("upda")
        // if(state){
        //     alert("success")
        // }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
    }
    showLbData(){
        
                let arr=[]
                this.props.citys.forEach((item,i)=>{
                    arr.push(
                        <span>{item.name}</span>
                    )
                })
                 return arr
            }
    render(){
        return (
            <div >
               {this.showLbData()}
            </div>
         )
    }
}
//定义默认属性
WhereSonComponent.defaultProps={

}



export default WhereSonComponent