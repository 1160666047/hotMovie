

import $ from 'jquery'

class MineComponent extends React.Component {   
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
    isshowChange(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    render(){
        return (
            <div >
           MineComponent
         </div>    
        )
    }
}
//定义默认属性
MineComponent.defaultProps={

}



export default MineComponent