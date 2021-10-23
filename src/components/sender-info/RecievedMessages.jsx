import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

const RecievedMessages = (props) => {
  const groups = useSelector((state) => state.groups);
  const accounts = useSelector((state) => state.accounts);

  const userID = (group) => {
    return group.participants.filter(
      (participant) => participant !== accounts[0].userID
    );
  };

  return (
    <div className={"row-span-4  p-2 m-6"}>
      {groups.map((group, i) => {
        return (
          <div
            key={group.id}
            id="receivedMessage"
            className={
              "flex flex-row gap-6 items-center justify-start shadow-md p-2 rounded bg-coffee "
            }
          >
            <img
              id={"receivedMessageImg"}
              src="https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt=""
              className={"rounded-full h-20 w-20 p-1 col-span-1"}
            />
            <div className={"col-span-2 "}>
              <div id="receivedMessageUser" className={"font-semibold py-2"}>
                {userID(group)}
              </div>
              <div id="receivedMessageDesc" className={"font-light"}>
                {group.messages[0].message}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecievedMessages;
