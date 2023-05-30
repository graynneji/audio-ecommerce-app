import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import { Fragment } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.css";

const defaultFormField = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const resetFormField = () => {
    setFormField(defaultFormField);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email ");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
    console.log(formField);
  };
  return (
    <Fragment>
      <div className="sign-up-container">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className="buttons-container">
            <Button type="submit">Sign In</Button>

            <Button
              type="button"
              buttonType="google"
              onClick={signInWithGoogle}
            >
              Google sign in
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default SignInForm;
