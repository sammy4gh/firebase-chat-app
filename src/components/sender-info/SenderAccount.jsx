import React from "react";
import { useSelector } from "react-redux";

const SenderAccount = (props) => {
  const senderAccount = useSelector((state) => state.accounts);

  return (
    <div
      className={
        "row-span-1 flex flex-row justify-center place-items-center gap-10 shadow-lg  border-none px-6 rounded-lg m-4 bg-coffee-dark"
      }
    >
      <div>
        <img
          id={"senderImage"}
          src={senderAccount[0].userImg}
          alt=""
          className={"rounded-full h-28 w-28 p-2"}
        />
      </div>

      <div className={"text-center"}>
        <div id="senderName" className={"font-semibold text-2xl  "}>
          {senderAccount[0].username}
        </div>
        <div id="senderUserId" className={"font-light"}>
          {senderAccount[0].userID}
        </div>
      </div>
    </div>
  );
};

export default SenderAccount;
