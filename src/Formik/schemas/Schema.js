import * as Yup from "yup";

const passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

export const submitSchema = Yup.object({
  name: Yup.string().min(3).required("Please enter your name."),
  email: Yup.string()
    .email("Please enter valid email.")
    .required("Please enter your email."),
  password: Yup.string()
    .matches(passwordRegex, "Please enter valid password.")
    .required("Please enter your password."),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Password do NOT match!")
    .required("Please enter confirm password."),
});
