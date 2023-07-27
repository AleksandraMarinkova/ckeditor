import React, { Component } from "react";
import EditorComponent from "./components/EditorComponent";
import NavbarWrapper from "./components/layout/NavbarWrapper";
// material , pozicioniranje na sredina i fixna sirina
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
