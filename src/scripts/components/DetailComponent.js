

import $ from 'jquery'

class DetailComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          data:{}
        }
    }
    getNews(){
        let that = this
        $.ajax({
            url:"http://localhost:9000/api/i"+this.props.routeParams.id+"/info/",
            success(results){
               that.setState({
                   data:results.data
               })
            }
        })
    }
    componentWillMount(){
        this.getNews()
    }
    render(){

        return (


            <div className="content">
                <div className="content-block">
                <h3>{this.state.data.title}</h3>
                <div>{this.state.data.content}</div>
                    
                </div>
            </div>

        )
    }
}
//定义默认属性
DetailComponent.defaultProps={

}



export default DetailComponent