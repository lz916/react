import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "./views/project-list/index";
import { LoginScreen } from "./views/login";
import { AuthProvider, useAuth } from "./context/auth-context";
import { AuthappScreen } from "./views/auth-app";
import { UnauthAppScreen } from "./views/unauth-app.tsx";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListScreen></ProjectListScreen> */}
      <AuthProvider>
        {user ? (
          <AuthappScreen></AuthappScreen>
        ) : (
          <UnauthAppScreen></UnauthAppScreen>
        )}
      </AuthProvider>
    </div>
  );
}

export default App;
