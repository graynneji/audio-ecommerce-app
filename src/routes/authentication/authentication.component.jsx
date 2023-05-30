import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import "./authentication.style.css";
const Authentication = () => {
  return (
    <div>
      <div className="main-container auth-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};
export default Authentication;
