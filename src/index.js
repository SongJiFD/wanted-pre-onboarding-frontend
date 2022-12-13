import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SignInContainer from "./signIn/signIn.container";
import SignUpContainer from "./signUp/signUp.container";
import TodoContainer from "./todo/todo.container";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInContainer />}></Route>
        <Route path="/signUp" element={<SignUpContainer />}></Route>
        <Route path="/todo" element={<TodoContainer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
