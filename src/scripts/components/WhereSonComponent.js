

import $ from 'jquery'
import store_redux from '../redux/store'
import actions_redux from '../redux/actions'
import actioncreator from '../flux/actions'
import store from '../flux/store'
class WhereSonComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentDidUpdate(props,state){
        // alert("upda")
        // if(state){
        //     alert("success")
        // }
    }
    componentWillMount(){//最后一次修改jsx的机会；一般用来执行ajax
    }
    addFlux(obj){
        actioncreator.changePosition({city:obj.name,id:obj.id})
    }
    naver(id){
        let anchorElement = document.getElementById(id);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
    showLbData(){
        let that=this
                let wordAarr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ',' ']
                let arr=[]
                wordAarr.forEach((item,i)=>{
                    let aaa='#'+item;
                    arr.push(
                        <span><a onClick={this.naver.bind(this,item)}>{item}</a></span>
                    )
                    
                })
                
                let dataAarr=this.props.citys
               
                let arrDouble=[]
                wordAarr.forEach((item1,i1)=>{
                    let arr=[]
                    dataAarr.forEach((item2,i2)=>{
                        
                        if(item2.pinyin.slice(0,1)==item1){
                            arr.push(item2)
                        }
                    })
                    arrDouble.push({id:item1,arrs:arr})
                })
                
                
                arrDouble.forEach((item,i)=>{
                    //console.log(item.id,item.arrs) {id:A,arrs:arr}
                    let num=0
                    arr.push(
                            <p id={item.id}>{item.id}</p>
                        )
                    
                    item.arrs.forEach((item2,i2)=>{
                        arr.push(
                            <span onClick={that.addFlux.bind(this,item2)}>{item2.name}</span>
                        )
                    })
                        if(item.arrs.length%4!=0&&item.arrs.length!=0){
                            for(var i=0,l=4-item.arrs.length%4;i<l;i++){
                                arr.push(
                                    <span></span>
                                )
                            }
                        }
                })



          
                // dataAarr2.forEach((item,i)=>{
                //    // console.log(item)
                //     arr.push(
                //                 <span>{item.name}</span>
                //             )
                // })
                 return arr
            }
    render(){
        return (
            // {for(){}}
            <div className="citysWhere">
               {this.showLbData()}
               {/* <showCitysComponent/> */}
            </div>
         )
    }
}
//定义默认属性
WhereSonComponent.defaultProps={

}



export default WhereSonComponent