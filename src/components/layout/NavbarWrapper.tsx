import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

const NavbarWrapper = () => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default NavbarWrapper;
