import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/functionBased/TodoContainer";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NotMatch from "./components/functionBased/notMatch";
import About from "./components/functionBased/About";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoContainer />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotMatch />}></Route>            
        </Routes>         
      </BrowserRouter>   
  </React.StrictMode>,
  root
);
