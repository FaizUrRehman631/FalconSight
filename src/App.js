import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News.js";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  country = "us";
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/home"
              element={
                <News setProgress={this.setProgress} 
                  key="home"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="Home"
                />
              }
            />
            <Route
              path="/about"
              element={
                <News setProgress={this.setProgress} 
                  key="about"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="About"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  key="sports"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="technology"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  key="health"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="health"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={this.pageSize}
                  country={this.country}
                  category="general"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
