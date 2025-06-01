import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z]+$/, "Name must contain only letters and no spaces")
    .required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});