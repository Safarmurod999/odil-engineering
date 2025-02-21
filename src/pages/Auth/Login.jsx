import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../data/const";

import logo from "../../assets/icons/logo.svg";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        navigate("/admin");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div className={"sign-in"}>
      <div className="sign-in-container sm:mx-auto sm:w-full sm:max-w-sm">
        <div className={"sign-in__logo"}>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <h2 className={"sign-in__title"}>Sign in to your account</h2>

        <div className={"sign-in__form"}>
          <form onSubmit={handleSubmit}>
            <div className={"sign-in__form__input-group"}>
              <label
                htmlFor="username"
                className={"sign-in__form__input-group__label"}
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                required
                className={"sign-in__form__input-group__input"}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className={"sign-in__form__input-group"}>
              <div className={"sign-in__form__password-group"}>
                <label
                  htmlFor="password"
                  className={"sign-in__form__input-group__label"}
                >
                  Password
                </label>
                <a href="#" className={"sign-in__form__password-group__forgot"}>
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className={"sign-in__form__input-group__input"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className={"sign-in__form__submit"}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
