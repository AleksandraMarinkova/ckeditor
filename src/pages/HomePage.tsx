import React, { useEffect, useState } from "react";
import NavbarWrapper from "../components/layout/NavbarWrapper";
import { Grid } from "@mui/material";

const Home: React.FC = () => {
  const htmlContent = localStorage.getItem("htmlContent");
  return (
    <div>
      <NavbarWrapper />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
