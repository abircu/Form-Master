import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border-2 border-amber-200 m-4 p-4">
      <h1>Aunty</h1>
      <p>Money:{money}</p>
      <button onClick={() => setMoney(money + 1000)}>Add 1000tk</button>
    </div>
  );
};

export default Aunty;
