import { atom } from "recoil";

const UserState = atom({
  key: "UserState",
  default: {
    fullname:"",
    email: "",
    
    phone_no :"",
   
  },
});

export default UserState;
