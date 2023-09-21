import React, { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Someone = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div className="border-2 border-amber-200 m-4 p-4">
      <h1>my special one</h1>
      <p>{asset}</p>
      <p>Also has a{gift}</p>
    </div>
  );
};

export default Someone;
