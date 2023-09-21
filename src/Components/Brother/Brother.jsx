import React, { useContext } from "react";
import { Landmessage } from "../Grandpa/Grandpa";

const Brother = () => {
  const get = useContext(Landmessage);
  return (
    <div className="border-2 border-amber-200 m-4 p-4">
      <h2>Brotherhood</h2>
      <p>{get}</p>
    </div>
  );
};

export default Brother;
