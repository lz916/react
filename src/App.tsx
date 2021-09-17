import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "./views/project-list/index";
import { LoginScreen } from "./views/login";
function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen></ProjectListScreen> */}
      <LoginScreen></LoginScreen>
    </div>
  );
}

export default App;
