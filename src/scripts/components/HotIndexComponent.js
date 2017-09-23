


import $ from 'jquery'
import store from '../flux/store'
import actions from '../flux/actions'
import Fetch from '../modules/fetch'
import HotIndexContentComponent from './HotIndexContentComponent'

import store_redux from '../redux/store'
import actions_redux from '../redux/actions'
class HotIndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            lb_arr:[],
            lb_arr_son:[],
            lb_arr_son2:[],
            swiper:null

        }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
        this.getLunboDate()
        this.getLunboDate_son()
        this.getLunboDate_son2()
        actions_redux.changeTitle("卖座电影")
    }
    //获取轮播图的数据
    getLunboDate(){
      // http://localhost:9000/ele/shopping/v3/hot_search_words
      // m.maizuo.com/v4/api/billboard/home?__t=1505896644137
      //服务器请求我们自己的地址但后面的参数一个不差的传到config，在config中把localhost再换回来把/hot换走
        Fetch.Get('http://localhost:9000/hot/v4/api/billboard/home?__t=1505896644137',{
        })
        .then(res=>{
            return res.json()})
        .then(json=>{
            this.setState({
                lb_arr:json.data.billboards
            })
        })

    }
    //获取轮播图的数据
    getLunboDate_son(){
        // http://localhost:9000/ele/shopping/v3/hot_search_words
        // http://m.maizuo.com/v4/api/film/now-playing?__t=1505955007135&page=1&count=5
        //服务器请求我们自己的地址但后面的参数一个不差的传到config，在config中把localhost再换回来把/hot换走
          Fetch.Get('http://localhost:9000/hot/v4/api/film/now-playing?__t=1505955007135&page=1&count=5',{
          })
          .then(res=>{
              return res.json()})
          .then(json=>{
              this.setState({
                lb_arr_son:json.data.films
              })
              console.log("qianqian")
              console.log(this.state.lb_arr_son)
          })
  
      }
      //第二个子组件获取数据的方法
      getLunboDate_son2(){
        // http://localhost:9000/ele/shopping/v3/hot_search_words
        // //m.maizuo.com/v4/api/film/coming-soon?__t=1506005770161&page=1&count=3
        //服务器请求我们自己的地址但后面的参数一个不差的传到config，在config中把localhost再换回来把/hot换走
          Fetch.Get('http://localhost:9000/hot/v4/api/film/coming-soon?__t=1506005770161&page=1&count=3',{
          })
          .then(res=>{
              return res.json()})
          .then(json=>{
              this.setState({
                lb_arr_son2:json.data.films
              })
          })
  
      }
    showLbData(){
        let arr=[]
        this.state.lb_arr.forEach((item,i)=>{
            arr.push(<div className="hot__Lb--Header swiper-slide"><a href="#"><img src={item.imageUrl}/></a></div>)
        })
         return arr
    }
    render(){
        //let {position_info} = this.state
        return (
            <div className="hot__Index--farther">
            <div className="hot__Index swiper-container">
               <div className="swiper-wrapper">
                   {this.showLbData()}
    
               </div>
             <HotIndexContentComponent lb_arr={this.state.lb_arr_son} showWhat={{url:'/v4/api/film/now-playing?page=',showHow:true,btnVal:'更多正在热映'}}/>
             <p><span>即将上映</span></p>
             <HotIndexContentComponent lb_arr={this.state.lb_arr_son2} showWhat={{url:'/v4/api/film/coming-soon?page=',showHow:false,btnVal:'更多即将上映'}}/>
            </div>
            </div>
        )
    }
    componentDidMount(){//访问已经渲染的真是dom
        
        
    }
    componentDidUpdate(){
        // this.state.mySwiper.update()
        let that = this
        that.state.mySwiper = new Swiper('.swiper-container', {
             autoplay: 2000,//可选选项，自动滑动
            loop:true,
            autoplayDisableOnInteraction:false,
            loopAdditionalSlides:3,
            paginationClickable: true,
            longSwipesRatio: 0.3,
            touchRatio:1,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper

        })
    }
    //当store里数据改变的时候，组件会重新获取数据
}
//定义默认属性
HotIndexComponent.defaultProps={

}



export default HotIndexComponent