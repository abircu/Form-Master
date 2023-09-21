import React, { createContext, useState } from "react";
import Daddy from "../Daddy/Daddy";
import Uncle from "../Ucle/Uncle";
import Aunty from "../Aunty/Aunty";

export const AssetContext = createContext("gold");
export const Landmessage = createContext("porcha");
export const MoneyContext = createContext(1000);
const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "daimond ring";
  return (
    <div className=" border-2 border-rose-600 m-4 p-4 rounded-lg ">
      <h1 className="text-4xl">Grandpa</h1>
      <p>net money:{money}</p>
      <div className=" flex justify-between  border-2 border-rose-600 m-4 p-4 rounded-lg ">
        <MoneyContext.Provider value={[money, setMoney]}>
          <Landmessage.Provider value="porcha">
            <Daddy asset={asset} />
            <Uncle />
            <Aunty />
          </Landmessage.Provider>
        </MoneyContext.Provider>
      </div>
    </div>
  );
};

export default Grandpa;
