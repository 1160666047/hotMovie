

import $ from 'jquery'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'

class CinemaComponent extends React.Component {   
    constructor(props,context){
        console.log($)
        super(props,context)

        this.state={
          isshow:false
        }
    }
    componentDidUpdate(props,state){
        // alert("upda")
        // if(state){
        //     alert("success")
        // }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
        actions_redux.changeTitle("影院")
    }
    isshowChange(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    render(){
        return (
            <div >
               CinemaComponent
            </div>
         )
    }
}
//定义默认属性
CinemaComponent.defaultProps={

}



export default CinemaComponent