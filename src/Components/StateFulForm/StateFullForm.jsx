import { useState } from "react";

const StateFullForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  //   onclick function
  const hadleStateFullButton = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  // onChange function for email
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  // onchange function for password
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("password must be greater than 6 latter");
    } else {
      setError("");
      console.log(email, password);
    }
  };
  return (
    <div>
      <form onSubmit={hadleStateFullButton}>
        <input className="bg-gray-200 mb-2" type="text" name="name" />
        <br />
        <input
          onChange={handleEmailChange}
          className="bg-gray-200 mb-2"
          type="email"
          name="email"
        />
        <br />
        <input
          onChange={handlePassword}
          className="bg-black text-white mb-2"
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <input className="bg-black text-white" type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFullForm;
