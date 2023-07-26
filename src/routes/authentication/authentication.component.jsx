import SignUpForm from "../../components/sign-up-form/sign-up-form.componenent";
import SignInForm from "../../components/sign-in-form/sign-in-form.componenent";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
