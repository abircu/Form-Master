import React, { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
    // emailRef.current.focus();
    // passwordRef.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-200 mb-2"
          ref={nameRef}
          type="text"
          name="name"
        />
        <br />
        <input
          className="bg-gray-200 mb-2"
          ref={emailRef}
          type="email"
          name="email"
        />
        <br />
        <input
          className="bg-black text-white mb-2"
          ref={passwordRef}
          type="password"
          name="password"
          id=""
        />
        <br />
        <input className="bg-black text-white" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
