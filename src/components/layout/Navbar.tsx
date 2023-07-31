import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SidebarItems from "../const/SidebarItems";

interface Props {
  window?: () => Window;
}

const Navbar = (props: Props) => {
  const drawerWidth = 240;

  const navigate = useNavigate();
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <List>
          {SidebarItems.logoItem.map((text, index) => (
            <ListItem
              key={text.id}
              disablePadding
              onClick={() => navigate(text.route)}
            >
              <ListItemButton>
                <ListItemIcon>{<img src={text.icon} />}</ListItemIcon>

                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Toolbar>
      <Divider />
      <h5>MANAGEMENT</h5>
      <List>
        {SidebarItems.sideBarItemsManagement.map((text, index) => (
          <ListItem
            key={text.id}
            disablePadding
            onClick={() => navigate(text.route)}
          >
            <ListItemButton>
              <ListItemIcon>{<img src={text.icon} />}</ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <h5>EDITOR</h5>
      <List>
        {SidebarItems.sideBarItemsEditor.map((text, index) => (
          <ListItem
            key={text.id}
            disablePadding
            onClick={() => navigate(text.route)}
          >
            <ListItemButton>
              <ListItemIcon>{<img src={text.icon} />}</ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="right"
          >
            <Button
              id="demo-customized-button"
              aria-haspopup="true"
              variant="contained"
              disableElevation
              endIcon={<KeyboardArrowDownIcon />}
            >
              English
            </Button>

            <Button
              id="demo-customized-button"
              aria-haspopup="true"
              variant="contained"
              disableElevation
              endIcon={<KeyboardArrowDownIcon />}
            >
              User name
            </Button>
          </Typography>

          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
