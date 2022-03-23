import React from "react";

// ui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// icons
import { IoIosMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

// link
import { Link } from "react-router-dom";

const Navigation = ({ isMuros }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <ListItemText primary={"Inicio"} />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary={"Ubicación"} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary={"Agenda"} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary={"Ponentes"} />
        </ListItem>
        <Divider />
        <ListItem button>
          <Link
            to={"/muros"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemText primary={"Muros"} />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary={"Extras"} />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: "#e30611" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <IoIosMenu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {isMuros ? "Muros" : "GMV Convention 2019"}
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <IoIosNotifications />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </>
  );
};

export default Navigation;
