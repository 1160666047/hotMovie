


import $ from 'jquery'
import store from '../flux/store'
import actions from '../flux/actions'
import Fetch from '../modules/fetch'
class HotIndexComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            lb_arr:[],
            swiper:null
        }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
        this.getLunboDate()
        
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
    showLbData(){
        console.log(this.state.lb_arr[0])
        let arr=[]
        this.state.lb_arr.forEach((item,i)=>{
            arr.push(<div className="hot__Lb--Header swiper-slide"><a href="#"><img src={item.imageUrl}/></a></div>)
        })
         return arr
    }
    render(){
        let {position_info} = this.state
        return (
            <div className="hot__Index swiper-container">
               <div className="swiper-wrapper">
                   {this.showLbData()}
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