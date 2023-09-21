import useInputState from "../../CustomHooks/useInputState";

const CustomHook = () => {
  //   const [name, handleNameChange] = useInputState("rojoni kanto saha");
  const emailState = useInputState("rojoni@gmail.com");
  const handleSubmit = (e) => {
    console.log("Email:", emailState.isValue);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          className="bg-gray-200"
          type="text"
          name="name"
        /> */}
        <br />
        <input
          {...emailState}
          className="bg-gray-200"
          type="email"
          name="email"
        />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input className="bg-black text-white" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CustomHook;
