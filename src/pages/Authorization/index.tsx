import React, { useState } from "react";
import Header from "components/Header";
import Forms from "components/Forms";
import { withRouter } from "react-router";
import { auth } from "api/consts";
import { uid } from "rand-token";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { tokenLength } from "api/consts";
import history from "api/history";

interface Props {
  history: any;
}

const Authorization = (props: Props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({
    login: false,
    password: false,
  });
  const notify = () =>
    toast.error("Incorrect login or password", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const logIn = () => {
    if (auth.login === login && auth.password === password) {
      localStorage.setItem("token", uid(tokenLength));
      props.history.push("/");
    }
    let errorsObject = { ...errors };
    if (auth.login !== login) {
      errorsObject.login = true;
    } else {
      errorsObject.login = false;
    }

    if (auth.password !== password) {
      errorsObject.password = true;
    } else {
      errorsObject.password = false;
    }
    notify();
    setError(errorsObject);
  };

  return (
    <div>
      <Header />
      <Forms
        onLogin={(e: React.ChangeEvent<HTMLInputElement>) => {
          setLogin(e.target.value);
        }}
        onPassword={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        }}
        errors={errors}
        login={login}
        password={password}
        onSend={logIn}
      />
      <ToastContainer />
    </div>
  );
};

export default withRouter(Authorization);
