import React from "react";
import { Hello, HelloPerson } from "./Hello";
import Header from "./Header";
import HelloBinhMinh from "./HelloBinhMinh";
import Car from "./Car";
import Login from "./Login";
function App() {
    return (
        <div>
            <Header />
            <Login />
            <Hello />
            <HelloBinhMinh />
            <HelloPerson name="Lý Ngọc Minh Thiện" />
            <Car />
        </div>
    );
}

export default App;
