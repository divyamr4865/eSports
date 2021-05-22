import React, { Component } from 'react'
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import MiniDrawer from './components/Drawer page/Drawerpage';
import './App.css'
import Login from './components/Login/Login'
export default class App extends Component {
  state = { test: false }
  render() {
    return (
      <div>
        <Router basename="eSports/?/">

           <Route path="/" component={Login} exact/>
          <Route path="/Home" component={MiniDrawer}/>
        </Router>
      </div>
     //  <div>
     // <Router>
     // <Switch>
     //        <Route path="/" component={HomePage} exact />
     //         <Route path="/about" component={AboutUs} exact />
     //         </Switch>
     //   </Router>
     //  </div>

    )
  }
}
