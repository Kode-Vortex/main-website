import { atom } from "recoil";

const LoginState = atom({
  key: "login",
  default: {
    email: "",
    password: "",
  },
});

export default LoginState;
