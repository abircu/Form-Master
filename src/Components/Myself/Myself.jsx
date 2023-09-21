import React from "react";
import Someone from "../Someone/Someone";

const Myself = ({ asset }) => {
  return (
    <div className="border-2 border-amber-200 m-4 p-4">
      <h1 className="text-rose-400">I am alen shoopon</h1>
      <Someone asset={asset} />
    </div>
  );
};

export default Myself;
