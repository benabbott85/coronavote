import React from "react";

import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import GroupIcon from '@material-ui/icons/Group';
import Typography from '@material-ui/core/Typography';
import { withRouter,Link } from "react-router-dom";
// import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  drawer: {
    width: "150px",
   
   
     
  },
  
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon className="home"/>,
      onClick: () => history.push("/Home")
    },
    {
      text: "Profile",
      icon: <PersonIcon className="home"/>,
      onClick: () => history.push("/Profile")
    },
    {
      text: "Register",
      icon: <GroupIcon className="home"/>,
      onClick: () => history.push("/Signup")
    },
    {
        text: "Verify",
        icon: <VerifiedUserIcon className="home"/>,
        onClick: () => history.push("/Verify")
      }
  ];
  return (
      <div className="newnav">
        
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <Link to ="/Home"><Typography className="navhead">
        <img className="rona" src ="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg?resize=*:350px" alt="rona"></img>
        VoteFromHome</Typography></Link>
      <List className="navlist">
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
