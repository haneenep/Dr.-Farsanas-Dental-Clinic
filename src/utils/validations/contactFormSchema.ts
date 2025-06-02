import * as Yup from "yup";

function getNextWeekRange() {
  const today = new Date();
  const min = new Date(today);
  min.setDate(today.getDate() + 1);
  const max = new Date(today);
  max.setDate(today.getDate() + 7);
  return {
    min: min.toISOString().split("T")[0],
    max: max.toISOString().split("T")[0],
  };
}

const { min, max } = getNextWeekRange();

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
  date: Yup.string()
    .required("Date is required")
    .test(
      "is-next-week",
      `Date must be between ${min} and ${max}`,
      value => !!value && value >= min && value <= max
    ),
  time: Yup.string()
    .notRequired()
    .test(
      "is-in-range",
      "Time must be between 10:00 AM and 06:00 PM",
      value => {
        if (!value) return true; // optional
        return value >= "10:00" && value <= "18:00";
      }
    ),
});