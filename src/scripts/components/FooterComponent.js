
import {Link} from 'react-router'

class FooterComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }

    getActive(hash){
        //    /   /main   /collect
        //   /main   /collect
        let active = this.props.pathname=='/'?'/main':this.props.pathname       
        return hash==active?'tab-item external active':'tab-item external'
    }
    
    render(){
        
        return (


            <nav className="bar bar-tab">
                <Link className={this.getActive('/main')} to="/main">
                    <span className="icon icon-home"></span>
                    <span className="tab-label">首页1</span>
                </Link>
                {/* <a   href="#/main">
                    
                </a> */}
                <a  className={this.getActive('/collect')} href="#/collect">
                    <span className="icon icon-star"></span>
                    <span className="tab-label">收藏</span>
                </a>
            </nav>

        )
    }
}
//定义默认属性
FooterComponent.defaultProps={

}



export default FooterComponent