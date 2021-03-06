// import { register } from "../auth-provider";
// import { User } from "../views/project-list/search-panel";
// import { useState } from "react";
// import React from "react";
// import * as auth from "../auth-provider";
// const AuthContext = React.createContext<
//   | {
//       user: User | null;
//       register: (form: AuthForm) => Promise<void>;
//       login: (form: AuthForm) => Promise<void>;
//       logout: () => Promise<void>;
//     }
//   | undefined
// >(undefined);
// AuthContext.displayName = "AuthContext";

// interface AuthForm {
//   username: string;
//   password: string;
// }
// AuthContext.displayName = "AuthContext";

// export const AuthProvider = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const login = (form: AuthForm) =>
//     auth.login(form).then((user) => setUser(user));
//   const register = (form: AuthForm) =>
//     auth.register(form).then((user) => setUser(user));
//   const logout = () => auth.logout().then(() => setUser(nul));
//   return <AuthContext.Provider value={{ user, login, register, logout }} />;
// };

// export const useAuth = () => {
//   const context = React.useContext(AuthContext)
//   if (!context) {
//     throw new Error('useAuth必须在AuthProvider中使用')
//   }
//   return context
// }

import React, { ReactNode, useState } from "react";
import * as auth from "../auth-provider";
import { User } from "../views/project-list/search-panel";

interface AuthForm {
  username: string;
  password: string;
}
const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: AuthForm) => Promise<void>;
      register: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
console.log("AuthContext");
console.log(AuthContext);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user));
  const register = (form: AuthForm) =>
    auth.register(form).then((user) => setUser(user));
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  console.log('context')
  console.log(context)
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
