import './App.css';
import React, {useState} from 'react';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 12;
  const countryName = "in";
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />

        <Navbar />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="home" pageSize={pageSize} country={countryName} category="" />}></Route>
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country={countryName} category="business" />}></Route>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country={countryName} category="entertainment" />}></Route>
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country={countryName} category="general" />}></Route>
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country={countryName} category="health" />}></Route>
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country={countryName} category="science" />}></Route>
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country={countryName} category="sports" />}></Route>
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country={countryName} category="technology" />}></Route>
          </Routes>
        </div>

      </Router>

    </div>
  )
}

export default App