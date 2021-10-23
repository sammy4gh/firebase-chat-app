import "../App.css";
import SenderInfo from "../components/sender-info/SenderInfo";
import RecieverInfo from "../components/reciever-info/RecieverInfo";
import Group from "../components/group/Group";

function Chat() {
  return (
    <div className="h-screen grid justify-items-stretch   grid-cols-4  ">
      <SenderInfo />
      <Group />
      <RecieverInfo />
    </div>
  );
}

export default Chat;
