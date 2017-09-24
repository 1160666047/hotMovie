

import $ from 'jquery'
import store from '../flux/store'
import actioncreator from '../flux/actions'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'
import Fetch from '../modules/fetch'
import WhereSonComponent from './WhereSonComponent'


class WhereComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
             todos:store.getAll(),//这里指的是保存到store里面的数据
             new_city:'',
             now_city:'北京市',
             citys:[]
        }
    }
    componentDidUpdate(props,state){
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
        actions_redux.changeTitle("定位")
               this.getLunboDate()
                this.getCity()
    }
    //获取当前定位城市的方法；
    getCity(){
        let that = this
        var map, geolocation;
        //加载地图，调用浏览器定位服务
        map = new AMap.Map('container', {
            resizeEnable: true
        });
        map.plugin('AMap.Geolocation', function() {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition:'RB'
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
            that.setState({//设置状态当前定位城市
                now_city:data.addressComponent.province
            }) 
        }
        //解析定位错误信息
        function onError(data) {
          console.log(data)
        }
        
    }
    getLunboDate(){
        console.log("地理位置页要获取到数据了")
        //http://m.maizuo.com/v4/api/city?__t=1506258168056
        let that=this
            //调取代码获取数据
            let url='http://localhost:9000/hot/v4/api/city?__t=1506258168056';
            Fetch.Get(url,{
            })
            .then(res=>{
                return res.json()})
            .then(json=>{
                this.setState({
                    citys:json.data.cities
                  
                })
            })
    }
    //调用全部借口，获取全部城市信息保存到状态，用户输入的城市信息进行比较用正则表达式匹配从获取的数据里面匹配
    //就是说获取到的数据还有定位到的地址当我们点击的时候跟获取到的状态里面的数据进行比较，把获取到的数据存入store
    addNew(e){
        if(e.keyCode==13){//储存数据到store里面的flux方法这是储存信息   但要跟获取的数据匹配才能存入store
            let num=1
            this.state.citys.forEach((item,i)=>{
                var re = new RegExp(item.name)
                if(e.target.value.search(re)>-1){
                    console.log(num++)
                    actioncreator.changePosition(e.target.value);
                    return;
                }
            })
          
           
        }
    }
    makePositionCity(){//匹配定位到的城市跟数据库里面的城市，把对应城市名还有id存入cookie
        let that = this
        let now=this.state.now_city
        let num=1
        this.state.citys.forEach((item,i)=>{
            var re = new RegExp(item.name)
            if(now.search(re)>-1){
              
                actioncreator.changePosition(item.name);
                 return;
            }
        })
    }
    render(){
         //获取用的地理位置;

        return (
            <div>
                <span>浏览器定位的您的地址</span>

                <p onClick={this.makePositionCity.bind(this)}>{this.state.now_city}</p>
                <span>热门城市</span>
                <input placeholder="请输入地址" autofocus="autofocus" onKeyUp={this.addNew.bind(this)} type="text" />
                <WhereSonComponent citys={this.state.citys}/>

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