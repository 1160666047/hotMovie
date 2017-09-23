
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom') ListComponent

import RootComponent from './scripts/components/RootComponent'
import HotIndexComponent from './scripts/components/HotIndexComponent'
 import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
 import MovieComponent from './scripts/components/MovieComponent'
 import CinemaComponent from './scripts/components/CinemaComponent'
 import MineComponent from './scripts/components/MineComponent'
 import IdcardComponent from './scripts/components/IdcardComponent'
 import WhereComponent from './scripts/components/WhereComponent'
 import ListComponent from './scripts/components/ListComponent'
// {/* <IndexRedirect to="/main"/> */}
//hasHistory表示此路由由hash控制；
import {Provider} from 'react-redux'
import store from './scripts/redux/store'


ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            
            <IndexRoute component={HotIndexComponent}/>
            <Route path="/" component={HotIndexComponent}></Route>
            <Route path="/movie" component={MovieComponent}></Route>
            <Route path="/cinema" component={CinemaComponent}></Route>
            <Route path="/mine" component={MineComponent}></Route>
            <Route path="/idcard" component={IdcardComponent}></Route>
            <Route path="/where" component={WhereComponent}></Route>
            <Route path="/list" component={ListComponent}></Route>
            <Route path="*" component={HotIndexComponent}></Route> 

        </Route>
    </Router>
    </Provider>
    ,document.getElementById("app"))