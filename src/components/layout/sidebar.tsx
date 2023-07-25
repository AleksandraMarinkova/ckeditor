import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
 import logo from '../../assets/icons/logo/logo.png';
 import review from '../../assets/icons/editor/review.png'
 import libary from '../../assets/icons/editor/fi_book-open bold.png'
 import book from '../../assets/icons/editor/Frame 4.png';
 import asd from '../../assets/icons/editor/Frame 4.png';



const drawerWidth = 240;

interface Props {
  /**

   * Injected by the documentation to work in an iframe.

   * You won't need it on your project.

   */

  window?: () => Window;
}

const ResponsiveDrawer = (props: Props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
       
      <Toolbar>
          {/* <img src='../src/assets/icons/logo/Group.png' width={182} height={64} />
          < */}
          {/* <img src="react-text-editor/src/assets/icons/logo/Group.png"/> */}
          {/* <img src='/Users/doxteam/Desktop/Editor/react-text-editor/src/assets/icons/logo/Group.png'  /> */}
          {/* <img src='/Users/doxteam/Desktop/Editor/react-text-editor/src/assets/icons/logo/Group.jpg'  /> */}
          <img src={logo} alt="My Logo" />
          <h2>SYNERGI</h2>
        </Toolbar>

      <Divider />
      <h5>MANAGEMENT</h5>
      <List>
        {["Review"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               { <img src={review}/> }
        

                
               
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* <Divider /> */}
<h5>EDITOR</h5>
      <List>
        {["Libary"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              { <img src={libary}/> }
              
               
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

       {["My books"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {/* <img src="../../"> */}
              { <img src={book}/> }
              <button onClick={()=>{console.log(book);
              }}>asd</button>
              
              </ListItemIcon>

              <ListItemText primary={text} />
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

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },

          ml: { sm: `${drawerWidth}px` },
        }}
      >
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

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

export default ResponsiveDrawer;