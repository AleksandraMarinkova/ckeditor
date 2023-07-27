import React, { Component } from "react";
import EditorComponent from "../components/EditorComponent";
import NavbarWrapper from "../components/layout/NavbarWrapper";
// material , pozicioniranje na sredina i fixna sirina

const Editor: React.FC = () => {
  const initialHtmlContent =
    localStorage.getItem("htmlContent") ||
    "<p>Hello, CKEditor 5 HTML Reader!</p>";

  return (
    <div>
      <NavbarWrapper />
      <EditorComponent initialHtmlContent={initialHtmlContent} />
    </div>
  );
};

export default Editor;
