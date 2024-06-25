import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Content1 from './components/Content1';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

export default class App extends Component {
  pSize = 8;
  // myapikey = process.env.REACT_APP_API_KEY
  myapikey = '27fbd1ed2972434cacbdc55be1d3f32b'

  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <>

      <div>
      <Router>
      <NavBar/>
      <LoadingBar
        color='#4ab2f7'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/">
            <Content1 changeProgress = {this.setProgress} apikey = {this.myapikey} pageSize={this.pSize} key = "general" country = 'us' category = 'general'/>
          </Route>
          <Route exact path="/business">
            <Content1 changeProgress = {this.setProgress} apikey = {this.myapikey} pageSize={this.pSize} key = "business" country = 'us' category = 'business'/>
          </Route>
          <Route exact path="/politics">
            <Content1 changeProgress = {this.setProgress} apikey = {this.myapikey} pageSize={this.pSize} key = "politics" country = 'us' category = 'politics'/>
          </Route>
          <Route exact path="/entertainment">
            <Content1 changeProgress = {this.setProgress} apikey = {this.myapikey} pageSize={this.pSize} key = "entertainment" country = 'us' category = 'entertainment'/>
          </Route>
          <Route exact path="/health">
            <Content1 changeProgress = {this.setProgress} apikey = {this.myapikey} pageSize={this.pSize} key = "health" country = 'us' category = 'health'/>
          </Route>
          <Route exact path="/sports">
            <Content1 changeProgress = {this.setProgress} apikey = {this.myapikey} pageSize={this.pSize} key = "sports" country = 'us' category = 'sports'/>
          </Route>                                                
        </Switch>
      </Router>

      <Footer/>
      
      </div>
      </>
    )
  }
}

