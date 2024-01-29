import isEmailValidator from "validator/lib/isEmail";
import * as Yup from "yup";

export const validationSchemaAddTrainer = Yup.object().shape({
    fullName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Mail is required")
      .test(
        "is-valid",
        (message) => `${message.path} is invalid`,
        (value) =>
          value
            ? isEmailValidator(value)
            : new Yup.ValidationError("Invalid value")
      ),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password ahould contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
      phoneNumber: Yup.string()
      .typeError("must be a string")
      .test("len", "must be less than 12 digits", (val) => {
          if (val) return val.replace(/\D/g, '').length <= 12;
      })
      .test("len", "must be greater than 8 digits", (val) => {
          if (val) return val.replace(/\D/g, '').length >= 8;
      })
      
  });