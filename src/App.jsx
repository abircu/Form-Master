import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import CustomHook from "./Components/HookForm/CustomHook";
import RefForm from "./Components/RefForm/RefForm";
import ReusableForm from "./Components/Reusable_Form/ReusableForm";
import StateFullForm from "./Components/StateFulForm/StateFullForm";
function App() {
  const handleSingUpSubmit = (data) => {
    console.log("sign up data", data);
  };
  const handleUpdatesubmit = (data) => {
    console.log("update profile data", data);
  };
  return (
    <>
      {/* <StateFullForm />
      <RefForm />
      <CustomHook /> */}
      <ReusableForm
        formTitle={"Sing up"}
        submitBtnTitle={"Log in"}
        handleSubmit={handleSingUpSubmit}
      >
        <div>
          <h2>please sing up first</h2>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Update Profile"}
        submitBtnTitle={"Update"}
        handleSubmit={handleUpdatesubmit}
      />
      <Grandpa />
    </>
  );
}

export default App;
