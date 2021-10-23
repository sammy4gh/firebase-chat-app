import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const ReceiverAccount = (props) => {
  return (
    <div className={" p-2 border-none my-2 mx-2 "}>
      <div>
        <div
          className={
            "flex flex-row justify-center place-items-center  shadow-lg  rounded-lg gap-10 px-2 py-3 bg-coffee-dark"
          }
        >
          <img
            src="https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt=""
            className={"rounded-full h-28 w-28 p-2"}
          />
          <div className={"text-center"}>
            <div id="receiverUserName" className={"text-2xl font-bold"}>
              Jane Doe
            </div>
            <div id="receiverUserId" className={"font-light"}>
              userghs
            </div>
          </div>
        </div>
      </div>
      <div
        className={"shadow-lg border-none rounded-lg px-2  py-4 m-4 bg-coffee"}
      >
        <div id="receiverBio" className={"text-center p-9 "}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt
          eligendi excepturi isi porro sapiente!
        </div>
        <div id="receiverContacts">
          <ul className={"flex flex-row justify-center gap-4"}>
            <li>
              <FontAwesomeIcon
                icon={faMailBulk}
                className={"text-coffee-dark text-2xl"}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMailBulk}
                className={"text-coffee-dark text-2xl"}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMailBulk}
                className={"text-coffee-dark text-2xl"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReceiverAccount;
