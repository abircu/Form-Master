import React from "react";

const ReusableForm = ({
  formTitle,
  handleSubmit,
  submitBtnTitle = "Submit",
  children,
}) => {
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <h2 className="text-3xl mb-3 ">{formTitle}</h2>
      {children}
      <form onSubmit={handleSubmitProfile}>
        <input className="bg-gray-200 mb-3" type="text" name="name" />
        <br />
        <input className="bg-gray-200 mb-3" type="email" name="email" />
        <br />
        <input
          className="bg-gray-200 mb-3"
          type="password"
          name="password"
          id=""
        />
        <br />
        <input
          className="bg-black text-white"
          type="submit"
          value={submitBtnTitle}
        />
      </form>
    </div>
  );
};

export default ReusableForm;
