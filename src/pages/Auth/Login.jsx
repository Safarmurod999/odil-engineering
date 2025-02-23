import { get } from "lodash";
import { useConnect } from "./connect";
import logo from "../../assets/icons/logo.svg";

const Page = () => {
  const { values, handleChange, handleBlur, handleSubmit } = useConnect();

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
                name="user_name"
                type="text"
                value={get(values, "user_name", "")}
                required
                className={"sign-in__form__input-group__input"}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={get(values, "password", "")}
                onChange={handleChange}
                onBlur={handleBlur}
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
