import * as Yup from "yup";

// Zajedničko pravilo za lozinku
export const passwordRule = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");

// Zajedničko pravilo za email
export const emailRule = Yup.string()
  .email("Email is not valid")
  .required("Email is required");




//---------------------------- Schemas--------------------------------

export const loginSchema = Yup.object().shape({
  email: emailRule,
  password: passwordRule,
});


export const registerSchema = Yup.object().shape({
  email: emailRule,
  password: passwordRule,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const resetPasswordSchema = Yup.object().shape({
  password: passwordRule,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});



export const requestResetSchema = Yup.object().shape({
  email: emailRule
});


export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d{4,6}$/, "OTP must be 4-6 digits"),
});