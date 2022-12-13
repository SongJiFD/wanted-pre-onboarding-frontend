import SignUpPresenter from "./signUp.presenter";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailStatus, setEmailStatus] = useState(false);
  const [passStatus, setPassStatus] = useState(false);

  const ValidateEmail = (mail) => {
    if (/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(mail)) {
      return true;
    }
    return false;
  };

  const ValidatePassword = (pass) => {
    if (pass.length >= 8) return true;
    else return false;
  };

  const onChangeEmail = (event) => {
    setEmailStatus(ValidateEmail(event.target.value));
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassStatus(ValidatePassword(event.target.value));
    setPassword(event.target.value);
  };

  const onClickSignUp = async () => {
    try {
      const access_token = await axios.request({
        url: "https://pre-onboarding-selection-task.shop/auth/signup",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      });
      if (!access_token) {
        alert("error");
      } else {
        localStorage.setItem(
          "access_token",
          String(access_token.data.access_token)
        );
        console.log(access_token);
        navigator("/todo");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SignUpPresenter
        emailStatus={emailStatus}
        passStatus={passStatus}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
};
export default SignUpContainer;
