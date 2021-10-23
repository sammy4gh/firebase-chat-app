import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AddAccount = (props) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faUser}
        className={"text-coffee-dark text-2xl shadow-2xl"}
      />
    </div>
  );
};

export default AddAccount;
