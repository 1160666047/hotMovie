

import $ from 'jquery'
import store from '../flux/store'
import actioncreator from '../flux/actions'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'

class WhereComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
             todos:store.getAll(),
             isshow:false,
             new_city:'',
             now_city:''
        }
    }
    componentDidUpdate(props,state){
        // alert("upda")
        // if(state){
        //     alert("success")
        // }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
        actions_redux.changeTitle("定位")
    }
    isshowChange(){
        this.setState({
            isshow:!this.state.isshow
        })
    }
    //获取当前定位城市的方法；
    getCity(){
        getLocalCity((status,result)=>{
            console.log(result)
        });
    }
    addNew(e){
        if(e.keyCode==13){   
            console.log(e.target.value)
        	console.log('2.用户产生了操作，向actioncreator发送新的数据（调用方法）')
            actioncreator.changePosition(e.target.value)
        }
    }
    changeCity(e){
        this.setState({new_city:e.target.value})
        console.log(this.state.new_city)
    }

    render(){
        return (
            <div>
                <span>浏览器定位的您的地址</span>
                <p>{this.state.now_city}</p>
                <span>热门城市</span>
                <input  onKeyUp={this.addNew.bind(this)} type="text" />
                <p>{this.state.new_city}</p>
            </div>
         )
    }
    componentDidMout(){
        store.addChangeListener(()=>{
            this.setState({new_city:store.getAll()})
        })
    }
}
//定义默认属性
WhereComponent.defaultProps={

}



export default WhereComponent