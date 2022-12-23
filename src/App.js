import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/App.css';
import {
  Header,
  Footer,
  Home,
  AboutMe,
  Projects
} from './Components';

function App() {
  const [current, setCurrent] = useState('link-1');

  useEffect(() => {
    if (sessionStorage.current){
      setCurrent(sessionStorage.current);
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div className="App">
            <Header
              current={current}
              setCurrent={setCurrent}></Header>
            <Home
            current={current}
            setCurrent={setCurrent}></Home>
            <Footer></Footer>
          </div>
        }></Route>
        <Route path="/aboutme" element={
          <div className="App">
            <Header
              current={current}
              setCurrent={setCurrent}></Header>
            <AboutMe></AboutMe>
            <Footer></Footer>
          </div>
        }></Route>
        <Route path="/portfolio" element={
          <div className="App">
            <Header
              current={current}
              setCurrent={setCurrent}></Header>
            <Projects></Projects>
            <Footer></Footer>
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
