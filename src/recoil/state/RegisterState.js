import { atom } from "recoil";

const RegisterState = atom({
  key: "RegisterState",
  default: {
    fullname:"",
    email: "",
    password: "",
    phone_no :"",
    message:""
  },
});

export default RegisterState;
