

import $ from 'jquery'

class AsideLeftComponent extends React.Component {   
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
            <div className={this.state.isshow?"hot__aside--show hot__aside--Left":"hot__aside--hide hot__aside--Left"}>
                <ul>
                    <li><a href="#/" onClick={this.isshowChange.bind(this)}>首页</a></li>
                    <li><a href="#/movie" onClick={this.isshowChange.bind(this)}>影片</a></li>
                    <li><a href="#/cinema" onClick={this.isshowChange.bind(this)}>影院</a></li>
                    <li><a href="#/mine" onClick={this.isshowChange.bind(this)}>我的</a></li>
                    <li><a href="#/idcard" onClick={this.isshowChange.bind(this)}>卖座卡</a></li>
                </ul>
            </div>
         )
    }
}
//定义默认属性
AsideLeftComponent.defaultProps={

}



export default AsideLeftComponent