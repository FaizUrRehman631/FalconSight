import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News  from './components/News.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  render(){
    return(
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<News key="home" pageSize={this.pageSize} country="us" category="Home" />} />
            <Route path="/about" element={<News key="about" pageSize={this.pageSize} country="us" category="About" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />
          </Routes>
        </Router>
      </>
    )
  }
}
   


