import { useState } from "react";
import "./App.css";
import RequestForm from "./components/RequestForm";
import TokenSetter from "./components/TokenSetter";
import Logo from "./components/Logo";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Logo>
        </Logo>
          <br/>
        <TokenSetter setToken={setToken}></TokenSetter>
        <RequestForm token={token}></RequestForm>
      </header>
    </div>
  );
}

export default App;
