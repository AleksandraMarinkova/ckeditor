import React, { Component } from "react";
import EditorComponent from "./components/EditorComponent";
import NavbarWrapper from "./components/layout/NavbarWrapper";
// material , pozicioniranje na sredina i fixna sirina

const App = () => {
  return (
    <div>
      {/* <ButtonAppBar />
      <ResponsiveDrawer/> */}
      <NavbarWrapper />
      <EditorComponent />
    </div>
  );
};

export default App;
