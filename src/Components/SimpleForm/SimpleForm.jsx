import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="bg-gray-200" type="text" name="name" />
        <br />
        <input className="bg-gray-200" type="email" name="email" />
        <br />
        <input type="number" name="number" id="" />
        <br />
        <input className="bg-black text-white" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
