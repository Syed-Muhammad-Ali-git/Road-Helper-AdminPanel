import React from "react";
import LoginForm from "../components/loginForm/loginForm";

const Login = () => {
  return (
    <>
      {/* Form Container */}
      <div className="flex justify-center w-full xl:mr-40 mt-25 md:mt-0 p-5 ">
        <div className="w-120">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 manrope-font">
            ROAD HELPER
          </h1>

          <p className="text-[#697586] text-base mb-8">
            Enter your details to start with ROAD HELPER.
          </p>

          {/* Login form */}
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
