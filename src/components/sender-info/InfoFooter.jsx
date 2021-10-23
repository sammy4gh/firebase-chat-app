import React from "react";
import AddAccount from "./AddAccount";
import Search from "./Search";

const InfoFooter = (props) => {
  return (
    <div className={"flex justify-between px-4 py-4 items-end row-span-1"}>
      <AddAccount />
      <Search />
    </div>
  );
};

export default InfoFooter;
