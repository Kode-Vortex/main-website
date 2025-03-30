import { atom } from "recoil";

const LoginState = atom({
  key: "LoginState",
  default: {
    email: "",
    password: "",
  },
});

export default LoginState;
