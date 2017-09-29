

import $ from 'jquery'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'
import MovieTypeComponent from './MovieTypeComponent'
import Fetch from '../modules/fetch'

 import {connect} from 'react-redux'

class MovieComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={// state code MOVIE_NOW mean playing movie and MOVIE_COMING mean will play movie
            movieType:'MOVIE_NOW',
            movieData:[],
            butType:true
        }
    }

    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
        actions_redux.changeTitle("影片");
        
    }
    //获取数据的方式
    getShowboDate(){
        let that=this
        // http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
        // //m.maizuo.com/v4/api/film/coming-soon?__t=1506005770161&page=1&count=3
        //服务器请求我们自己的地址但后面的参数一个不差的传到config，在config中把localhost再换回来把/hot换走
          Fetch.Get('http://localhost:9000/hot/v4/api/film/now-playing?page=1&count=7',{
          })
          .then(res=>{
              return res.json()})
          .then(json=>{
                console.log(json)
              if(json){
                that.setState({
                      movieData:json.data.films,
                      pageNum:1
                  })
              }
          })
  
      }
    nowOrComing(type){
        this.setState({
            movieType:type
        }) 
        if(type=="NOW_MOVIE"){
          this.refs.baby.isHowChange(this.state.movieData)
        }
        if(type=="COMING_MOVIE"){
            this.refs.baby.isHowChange(this.state.movieData)
          }
    }
    showLbData(){
        console.log(this.state.movieData[0])
        let arr=[]
        this.state.movieData.forEach((item,i)=>{
            arr.push(<div ><a href="#">{item.ids}</a></div>)
        })
         return arr
    }

    getShowboDate(url,cb){
        console.log('获取数据')
        let that=this
        let urls='http://localhost:9000/hot'+url+this.state.pageNum+'&count=7'
          Fetch.Get(urls,{
          })
          .then(res=>{
              return res.json()})
          .then(json=>{
              if(json){
                  console.log(json,'duang')
                  cb(json)
                // that.setState({
                //       movieData:json.data.films
                //   })
              }
          })
  
      }

    rredux(bol){
        console.log(this.refs)
        let that = this
        //现在去找两种不同的请求地址
        ////m.maizuo.com/v4/api/film/now-playing?page=1&count=7 ：正在热映 1&count=7
        ////m.maizuo.com/v4/api/film/coming-soon?page=1&count=7 :即将上映
        if(bol){
            
            this.props.changeUserInfo({url:"/v4/api/film/coming-soon?page=",showHow:false})
            //console.log(this.props.movieShow.url,111)
           // this.refs.babyss.setmovieUrl('/v4/api/film/coming-soon?page=')
            this.getShowboDate('/v4/api/film/coming-soon?page=',(data)=>{
                that.refs.babyss.setData(data.data.films);
            })
        }else{
            this.props.changeUserInfo({url:"/v4/api/film/now-playing?page=",showHow:true})
            //console.log(this.props.movieShow.url,111)
           // this.refs.babyss.setmovieUrl('/v4/api/film/now-playing?page=')
            this.getShowboDate("/v4/api/film/now-playing?page=",(data)=>{
                that.refs.babyss.setData(data.data.films);
            })
        }
    }
    render(){
        //这个页面要写父子通信 p控制父组件状态 此状态影响父组件给hot_or_coming--movie--show的内容属性
            console.log('看看我点击的时候这里走不走')
        return ( //onClick={this.nowOrComing.bind(this,'MOVIE_COMING')}
            <div className="hot_or_coming--movie">
                <p className="p1">
                    <button onClick={this.rredux.bind(this,false)} className={this.props.movieShow.showHow?'btn_active':''}>正在热映</button>
                <button onClick={this.rredux.bind(this,true)} className={this.props.movieShow.showHow?'':'btn_active'}>即将上映</button></p>

                <MovieTypeComponent ref="babyss" />
         </div>
         )
    }
    componentWillReceiveProps(){
           // this.getShowboDate()

        //    myscroll=new iScroll(".hot_or_coming--movie",{
        //     hScroll:false,
        //     bounce:true,
        //     momentum:true,
        //     checkDOMChanges:true,
        //     vScrollbar:true,
        //     zoom:true,
        //     doubleTapZoom:10
        // });
    }
    componentDidMount(){
        window.onscroll= function  () {
            // 页面总高度
            var bodyHeight = document.documentElement.offsetHeight;
            console.log(bodyHeight)
            // 可视区高度
            var windowHeight = document.documentElement.clientHeight;
            console.log(windowHeight)
            //滚动条的高度    
            var srcollTop = document.documentElement.scrollTop || document.body.scrollTop;
            alert(srcollTop)
            var srcollH = document.body.scrollHeight;
            // alert(srcollH);
            if (srcollTop+windowHeight  >= srcollH-20) {
                alert(1)
            };
        }
    }
}

//定义默认属性
MovieComponent.defaultProps={

}
const mapDispatchToProps = (dispatch)=>{
	return {
		changeUserInfo:(info)=>{
			dispatch({type:'CHANGE_MOVIESHOW_URL',info:info})
		}
	}
}


export default connect(state=>state,mapDispatchToProps)(MovieComponent)