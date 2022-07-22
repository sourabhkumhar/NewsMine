import './App.css';
import React, { Component } from 'react'
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
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <div className="container">
            <Routes>
              <Route exact path="/" element={<News key="home" pageSize={this.pageSize} country={this.countryName} category="home" />}></Route>
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={this.countryName} category="business" />}></Route>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={this.countryName} category="entertainment" />}></Route>
              <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country={this.countryName} category="general" />}></Route>
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.countryName} category="health" />}></Route>
              <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={this.countryName} category="science" />}></Route>
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={this.countryName} category="sports" />}></Route>
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.countryName} category="technology" />}></Route>
            </Routes>
          </div>

        </Router>

      </div>
    )
  }
}
