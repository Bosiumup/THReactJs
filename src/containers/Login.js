import React, { useState } from "react";

function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        isAdmin: false,
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setLoginData({ ...loginData, [name]: checked });
        } else {
            setLoginData({ ...loginData, [name]: value });
        }
    };

    const handleLogin = () => {
        console.log(loginData);
    };

    return (
        <div>
            <h1>Login</h1>
            <div
                style={{
                    width: "max-content",
                    padding: "0 20px",
                    border: "3px solid black",
                }}
            >
                <label>Enter your username:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginData.username}
                    onChange={handleInputChange}
                />
                <br />
                <label>Enter your password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleInputChange}
                />
                <br />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                    }}
                >
                    <input
                        type="checkbox"
                        id="isAdmin"
                        name="isAdmin"
                        checked={loginData.isAdmin}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="isAdmin">Is Admin?</label> <br />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={handleLogin}>Đăng nhập</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
