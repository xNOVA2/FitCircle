import isEmailValidator from "validator/lib/isEmail";
import * as Yup from "yup";

export const validateSchemaSignIn = Yup.object().shape({
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
});


// Reset Password Schema 

export const forgetValidation = Yup.object().shape({
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
    });

    export const validateSchemaReset = Yup.object().shape({
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
          confirmPassword: Yup.string()
          .label("confirm password")
          .required()
          .oneOf([Yup.ref("password")], "Passwords must match"),
      });


      export const validateSchemaSignUp = Yup.object().shape({
        fullName: Yup.string().required("This field is required"),
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
          confirmPassword: Yup.string()
          .label("confirm password")
          .required()
          .oneOf([Yup.ref("password")], "Passwords must match"),
          phoneNumber: Yup.string()
          .typeError("must be a string")
          .test("len", "must be less than 12 digits", (val) => {
              if (val) return val.replace(/\D/g, '').length <= 12;
          })
          .test("len", "must be greater than 8 digits", (val) => {
              if (val) return val.replace(/\D/g, '').length >= 8;
          })
          .test("startsWithPlus", "must start with '+'", (val) => {
              if (val) return val.startsWith('+');
          })
      });