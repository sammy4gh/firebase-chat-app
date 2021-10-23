import React from "react";
import GroupHeader from "./GroupHeader";
import GroupSpace from "./GroupSpace";
import InputField from "./InputField";

const Group = () => {
  return (
    <div className={"col-span-2 flex flex-col justify-between "}>
      <GroupHeader />
      <GroupSpace />
      <InputField />
    </div>
  );
};

export default Group;
