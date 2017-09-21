

import $ from 'jquery'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'
import Fetch from '../modules/fetch'
class ListComponent extends React.Component {   
    constructor(props,context){

        super(props,context)

        this.state={
            lb_arr:{},
          isshow:false,
          listId:'3841',
          str:''
        }
    }
    componentDidUpdate(props,state){
    }
    //获取轮播图的数据
    getLunboDate(){
        console.log("iiiiiiiiiiiiiiiiiiiiiiiii")
        console.log(store_redux.getState().listId)
        let that=this
            that.setState({
                listId:store_redux.getState().listId
            })
            console.log("ajsdbadbasd")
            console.log(this.state.listId)
            //调取代码获取数据
            let url='http://localhost:9000/hot/v4/api/film/'+store_redux.getState().listId;
            Fetch.Get(url,{
            })
            .then(res=>{
                return res.json()})
            .then(json=>{
                console.log(json)
                this.setState({
                    lb_arr:json.data.film
                })
                actions_redux.changeTitle(this.state.lb_arr.name)
            })

        

    }
    showLbData(){
       

    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
       
        this.getLunboDate()
        
    }
    getLocalTime(nS) {     
        return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,'');     
     } 
    render(){
        // let cover= JSON.parse(this.state.lb_arr.cover)
        // console.log( this.state.lb_arr.cover.origin)
        let strr=''
        let data=this.state.lb_arr
        let date = this.getLocalTime(data.premiereAt)
        //????????????????????????????????????????????
        for(var i in this.state.lb_arr.cover){
            strr=this.state.lb_arr.cover.origin
        }
        return (
            <div className="hot__list">
                <img src={strr}/>
                <ul>
                <li><span></span>影片简介</li>
                <li>导演：{data.director}</li>
                {/* <li>主演：{data.actors[0]}</li> */}
                <li>地区语言：{data.nation}|{data.language}</li>
                <li>类型：{data.category}</li>
                <li>上映日期：{date}</li>
                
            </ul>
            <p>{data.synopsis}</p>
            </div>
         )
    }
}
//定义默认属性
ListComponent.defaultProps={

}



export default ListComponent