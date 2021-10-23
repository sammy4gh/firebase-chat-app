import "./App.css";
import SenderInfo from "./components/sender-info/SenderInfo";
import RecieverInfo from "./components/reciever-info/RecieverInfo";
import Group from "./components/group/Group";
import Chat from "./pages/Chat";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={SignUp} />
        <Route path={"/chat"} exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
