import React from "react";
import SenderAccount from "./SenderAccount";
import RecievedMessages from "./RecievedMessages";
import AddAccount from "./AddAccount";
import Search from "./Search";
import InfoFooter from "./InfoFooter";

const SenderInfo = (props) => {
  return (
    <div className={"min-h-screen grid grid-rows-6  col-span-1  shadow-md  "}>
      <SenderAccount />
      <RecievedMessages />
      <InfoFooter />
    </div>
  );
};

export default SenderInfo;
