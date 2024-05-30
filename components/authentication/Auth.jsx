import React from "react";
import LoginForm from "./LoginForm";

const Auth = ({ auhType }) => {

  return (
    <div >
        {auhType === "login" 
        ? (
          <LoginForm/>
        )
        : null}
    </div>
  );
};

export default Auth;
