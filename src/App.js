import './App.css';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  countryName = "in";
  apiKey = process.env.REACT_APP_NEWS_API;
  
  state = {
    progess: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />

          <Navbar />

          <div className="container">
            <Routes>
              <Route exact path="/" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="home" pageSize={this.pageSize} country={this.countryName} category="home" />}></Route>
              <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="business" pageSize={this.pageSize} country={this.countryName} category="business" />}></Route>
              <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="entertainment" pageSize={this.pageSize} country={this.countryName} category="entertainment" />}></Route>
              <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="general" pageSize={this.pageSize} country={this.countryName} category="general" />}></Route>
              <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="health" pageSize={this.pageSize} country={this.countryName} category="health" />}></Route>
              <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="science" pageSize={this.pageSize} country={this.countryName} category="science" />}></Route>
              <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="sports" pageSize={this.pageSize} country={this.countryName} category="sports" />}></Route>
              <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="technology" pageSize={this.pageSize} country={this.countryName} category="technology" />}></Route>
            </Routes>
          </div>

        </Router>

      </div>
    )
  }
}
