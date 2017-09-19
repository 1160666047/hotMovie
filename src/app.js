
require("./styles/app.scss")

///////////////////////
// var React = require("react")
// var ReactDOM = require('react-dom')

import RootComponent from './scripts/components/RootComponent'

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import MainComponent from './scripts/components/MainComponent'
import CollectComponent from './scripts/components/CollectComponent'
import DetailComponent from './scripts/components/DetailComponent'
// {/* <IndexRedirect to="/main"/> */}
ReactDOM.render(
    
    <Router history={hashHistory}>
         <Route path="/" component={RootComponent}>
            
            <IndexRoute component={MainComponent}/>
            <Route path="main" component={MainComponent}></Route>
            <Route path="collect" component={CollectComponent}></Route>
            <Route path="detail/:id" component={DetailComponent}></Route>
            <Route path="*" component={MainComponent}></Route>

        </Route>
    </Router>
    
    ,document.getElementById("app"))