import React from "react";

import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { withRouter } from "react-router-dom";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  drawer: {
    width: "190px",
   
     
  },
  
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/Home")
    },
    {
      text: "Profile",
      icon: <PersonIcon />,
      onClick: () => history.push("/Profile")
    },
    {
      text: "SignUp",
      icon: <MailIcon />,
      onClick: () => history.push("/Signup")
    },
    {
        text: "Verify",
        icon: <VerifiedUserIcon />,
        onClick: () => history.push("/Verify")
      }
  ];
  return (
      <div className="newnav">
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
    </div>
  );
};

export default withRouter(Drawer);
