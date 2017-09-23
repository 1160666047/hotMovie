

import $ from 'jquery'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'
import Fetch from '../modules/fetch'
import {connect} from 'react-redux'

class MovieTypeComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={    
            movieData:[],
            pageNum:1,
            movieUrl:''
        }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
        actions_redux.changeTitle("影片");
        this.getShowboDate()
        
        console.log('willmount')
    }
    isHowChange(val){
        this.setState({
            data:val
        })
    }
    setmovieUrlss(){
        console.log('aaa')
        this.setState({
            // movieUrl:url
        })
    }
    setData(data){
        this.setState({
            movieData:data
        })
        //console.log(this.state.movieData)
    }
    //获取数据
    getShowboDate(){
        console.log('获取数据')
        let that=this
        let url='http://localhost:9000/hot'+store_redux.getState().movieShow.url+this.state.pageNum+'&count=7'
          Fetch.Get(url,{
          })
          .then(res=>{
              return res.json()})
          .then(json=>{
              if(json){
                  console.log(json,'duang')
                that.setState({
                      movieData:json.data.films
                  })
              }
          })
  
      }
      //展示数据
    showLbData(){

        let arr=[]
        this.state.movieData.forEach((item,i)=>{
            arr.push(
                <div className="hot_or_coming--movie--son">
                <img src={item.poster.origin}/>
                <div>
                    <p>{item.name}</p>
                    <p>{item.intro}</p>
                    <p><span>{item.cinemaCount}家影院上映</span><span>{item.watchCount}人购买此票</span></p>
                </div>
                <div></div>
                </div>
            )
        })
         return arr
    }
    //根据url获取数据渲染页面；
    render(){
        
        console.log(store_redux.getState().movieShow.url,11111111111111111111)
        // console.log(this.props.movieShow.url)
        //这个页面要写父子通信 p控制父组件状态 此状态影响父组件给hot_or_coming--movie--show的内容属性
        return (
            <div>
                {this.showLbData()}

         </div>
         )
    }
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate')
    //    // this.getShowboDate()
    // }
    // componentDidUpdate(){
    //     console.log('DidUpdate')
    //      this.getShowboDate()
    // }
    // componentWillReceiveProps(){
    //     console.log('receive')
    //      this.getShowboDate()
    // }
}
    

//定义默认属性
MovieTypeComponent.defaultProps={

}

const mapDispatchToProps = (dispatch)=>{
	return {
		changeUserInfo:(info)=>{
			dispatch({type:'CHANGE_MOVIESHOW_URL',info:info})
		}
	}
}


export default MovieTypeComponent
