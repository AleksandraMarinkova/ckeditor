import React, { Component } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import EditorComponent from "./components/EditorComponent";
import { Grid } from "@mui/material";
import ButtonAppBar from "./components/layout/Navbar";
import ResponsiveDrawer from "./components/layout/sidebar";
// material , pozicioniranje na sredina i fixna sirina

const App = () => {
  return (
    <div>
      <ButtonAppBar />
      <ResponsiveDrawer/>
      
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <EditorComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
