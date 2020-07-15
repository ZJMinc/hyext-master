import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './streamer/home'
import LuckDraw from './streamer/luck-draw'
import Add from "./streamer/add";
import Create from "./streamer/create";
import Wait from "./streamer/wait";

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/luck-draw" component={LuckDraw} />
          <Route path="/wait" component={Wait}/>
          <Route path="/add" component={Add} />
          <Route path="/create" component={Create}/>
          <Route path="/index_streamer_pc_anchor_panel.html" component={Home} />
        </Switch>
      </Router> 
    )
  }
}

export default App