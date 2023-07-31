import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import SidebarItems from "../const/SidebarItems";
import { useNavigate } from "react-router";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

const Sidebar = (props: Props) => {
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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

export default Sidebar;
