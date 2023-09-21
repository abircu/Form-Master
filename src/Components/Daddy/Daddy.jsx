import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";

const Daddy = ({ asset }) => {
  return (
    <div className="border-2 border-amber-200 m-4 p-4">
      <h1>Daddy</h1>
      <section className="flex">
        <Myself asset={asset} />
        <Brother />
      </section>
    </div>
  );
};

export default Daddy;
