import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const InputField = (props) => {
  return (
    <div
      className={
        "col-span-1 flex flex-row justify-between place-items-center bg-coffee  shadow-xl gap-4 px-4"
      }
    >
      <div>
        <FontAwesomeIcon
          icon={faSmile}
          className={"text-2xl text-coffee-dark"}
        />
      </div>
      <form action="" className={"w-full"}>
        <textarea
          name="message"
          id="messageInput"
          className={
            " resize w-full  h-10 min-auto-0  scrollbar-hide rounded-lg border-coffee bg-coffee-dark focus:ring-coffee-dark focus:border-coffee-dark "
          }
        />
        {/*
        <input type="text" className={"w-full break-words"} />
*/}
      </form>
      <div className={"text-2xl"}>
        <FontAwesomeIcon icon={faPaperclip} className={"text-coffee-dark"} />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPaperPlane}
          className={"text-2xl text-coffee-dark"}
        />
      </div>
    </div>
  );
};

export default InputField;
