import Approuter from "./router/Approuter";
import React from "react";
import AuthContextProvider from "./context/AuthContextProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Approuter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
