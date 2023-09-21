import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div className="border-2 border-amber-200 m-4 p-4">
      <h1>uncle</h1>
      <p>Grandpa Money:{money}</p>
    </div>
  );
};

export default Uncle;
