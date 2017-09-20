

import $ from 'jquery'

class IdcardComponent extends React.Component {   
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
               IdcardComponent
            </div>
         )
    }
}
//定义默认属性
IdcardComponent.defaultProps={

}



export default IdcardComponent