import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons/faPhoneAlt";

const GroupHeader = (props) => {
  return (
    <div
      className={
        "col-span-1 shadow-xl flex justify-between place-items-center py-2 px-6 rounded-lg m-4 bg-coffee-dark"
      }
    >
      <img
        src="https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt=""
        className={"rounded-full h-16 w-16"}
      />
      <div className={"text-xl font-semibold"}>Jane Doe</div>
      <FontAwesomeIcon
        icon={faPhoneAlt}
        className={"font-semibold text-gray-800 text-2xl"}
      />
    </div>
  );
};

export default GroupHeader;
