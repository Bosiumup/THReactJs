import React from "react";
import { Hello, HelloPerson } from "./components/Hello";
import Header from "./containers/Header";
import HelloBinhMinh from "./components/HelloBinhMinh";
import Car from "./components/Car";
import Login from "./containers/Login";
import Menu from "./components/Menu";
function App() {
    return (
        <div>
            <Header />
            <Login />
            <Hello />
            <HelloBinhMinh />
            <HelloPerson name="Lý Ngọc Minh Thiện" />
            <Car />
            <Menu />
        </div>
    );
}

export default App;
