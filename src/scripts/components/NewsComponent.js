
// import $ from 'jquery'
import {Link} from 'react-router'
class NewsComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }

    render(){
        let {news} = this.props
        return (


        

            <div className="card">
                <div className="card-header">
                    <Link to={"/detail/"+news.item_id}>{news.title}</Link>
                    
                </div>
                <div className="card-content">
                    <div className="card-content-inner">{news.abstract}</div>
                </div>
            </div>



        )
    }
}
//定义默认属性
NewsComponent.defaultProps={

}



export default NewsComponent