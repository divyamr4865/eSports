
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import './Drawerpage.css'
import { Dropdown } from 'react-bootstrap'
import Avatar from '@material-ui/core/Avatar'
import avatar from '../../images/nurse.jpg'
import Badge from '@material-ui/core/Badge';
import bell from '../../images/notification.svg'
import { Menulist, MenuItem, ListItemText, ListItemIcon, MenuList, } from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg';
import Paper from '@material-ui/core/Paper';
import Nurse from '../../images/81.png'
import ManageTutorial from '../../components/ManageTutorial/ManageTutorial'
import Events from '../../components/Events/Events'
import Dashboard from '../../components/Dashboard/dashboard'
import { BrowserRouter,  Route,NavLink } from "react-router-dom";
import User from "../../images/logo.svg";
import coaches from "../../images/coaches.png";
import news from "../../images/news.png";
import events from "../../images/events.png";
import communities from "../../images/communities.png";
import youtube from "../../images/youtube.png";
import twitchtv from "../../images/twitchtv.png";
import Bank_Logo from "../../images/logo.svg";
import { Switch,Upload} from 'antd'
import NotificationsIcon from "../../images/Group 2886.svg";
import Germany from '../../images/ukflag.jpg'
import Coaches from "../../images/Group 2655.svg";
import icon1 from "../../images/Group 2657.svg";
import icon2 from "../../images/Group 2658.svg";
import icon6 from "../../images/Group 2662.svg";
import icon7 from "../../images/Group 2663.svg";
import icon8 from "../../images/Group 2664.svg";
import icon9 from "../../images/Group 2665.svg";
import icon10 from "../../images/Group 2666.svg"
import icon11 from "../../images/Home.svg"
import icon4 from '../../images/user.svg'
import icon12 from "../../images/Asset 2.svg"
import { MdSearch } from "react-icons/md";
import logo from "../../images/logo.svg";
import Eventsicon from '../../images/events.svg'
import { FaLayerGroup } from "react-icons/fa";
import SortIcon from '@material-ui/icons/Sort';
import Approvalicon from '../../images/Group 2883.svg'
import Usertutorial from '../../images/monitor.svg'
import MainDashboard from '../../components/MainDashboard/Dashboard'
import ManageNews from '../../components/ManageNews/ManageNews'
import ManageCoach_table from '../../components/ManageCoach/ManageCoach_table'
import Usertutorial_table from '../../components/UserTutorial/Usertutorial_table'
import Approval from '../../components/Approval/Approval'
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import StorageIcon from '@material-ui/icons/Storage';
const drawerWidth = 250;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      width:drawerWidth

    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 100,
    marginRight: 36,
    FontSize: 10,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  icontoolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    color:'red',
    FontSize: 50,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    padding:'30px 18px',
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false, logout: false,
    custom_hide: true,
    current_location:""
  };
  active=()=>
  {
    this.setState({current_location:window.location.pathname})
  }

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open});
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  viewmodalOpen = () => {
    this.setState({ viewmodal: true })
  }
  viewmodalClose = () => {
    this.setState({ viewmodal: false })
  }
  logoutOpen = () => {
    this.setState({ logout: !this.state.logout })

  }
  logoutClose = () => {
    this.setState({ logout: false })
  }

  maindashboardpush=()=>
  {
  this.props.history.push("/Home")
  }

  render() {
    const { classes, theme, children } = this.props;
      const { current_location } = this.state
      const location=window.location.href
      console.log(location,"location")
      const activeclr=location.endsWith("approvaldashboard")||location.endsWith("approval")
    return (
      <div className="drawerpage_container">
        <div className={classes.root}>
          <CssBaseline />
           <AppBar position="fixed" className="first_logo_cont" >
           <Toolbar>
            <div className="drawer-logo-container"><img className="logo" src={Bank_Logo} alt="logo" /></div>

           </Toolbar>
          </AppBar>
       
          <AppBar position="fixed" className="second_appbar" >
        <Toolbar>
         <div className="headerLeft">
               <div>
              <SortIcon className="drawer_open" onClick={this.handleDrawerOpen}/>
              </div>
              
        
          <div className="header_last_cnt">
           <div className="flag_icon"><img  className="flag" src={Germany}/></div>
            <div className="text_edit"><span>English</span></div>
              <div><MdSearch className="search_icon_edit" /></div>

          <div className="loginGroup">
          <IconButton aria-label="Show 11 new notifications" className="headerbell" color="inherit">
          <Badge badgeContent={5} color="secondary">

            <ReactSVG src={NotificationsIcon} />
          </Badge>
        </IconButton>
         <div style={{paddingRight:'10px'}}></div> </div>
           <div className="vant_div"><div className="vant_name">Mani Krish</div><div className="admn">Admin</div></div>

           <div><img src={Nurse} className="pro_img"/></div>
          
         </div>
         </div>
          
        </Toolbar>
      </AppBar>
           
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            open={this.state.open}
          >
            
        
            <MenuList  onClick={this.active} className="appbar_sideicons">

             
            

            
         <MenuItem component={Link} to="/Home/maindashboard" className={`${location.endsWith("maindashboard") && this.state.open?"activecolor":location.endsWith("maindashboard")?"circleactiveclr":null}`}>
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={icon4} /></div>
                </ListItemIcon>
                <ListItemText primary="Dashboard" className="text"/>
              </MenuItem>              
                <MenuItem  component={Link} to="/Home/managecoach" className={`${location.endsWith("managecoach") && this.state.open?"activecolor":location.endsWith("managecoach")?"circleactiveclr":null}`}>
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={Coaches} /></div>
                </ListItemIcon>
                <ListItemText primary="Coach" className="text"/>
              </MenuItem>
               <MenuItem  component={Link} to="/Home/usertutorial" className={`${location.endsWith("usertutorial") && this.state.open?"activecolor":location.endsWith("usertutorial")?"circleactiveclr":null}`}>
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={icon11} /></div>
                </ListItemIcon>
                <ListItemText primary="User" className="text"/>
              </MenuItem>
               <MenuItem  component={Link} to="/Home/ManageTutorial" className={`${location.endsWith("ManageTutorial") && this.state.open?"activecolor":location.endsWith("ManageTutorial")?"circleactiveclr":null}`}>
                <ListItemIcon>
                  <div className="icon-container" style={{width:"25px"}}><ReactSVG src={Usertutorial}  className="User_img"/></div>
                </ListItemIcon>
                <ListItemText primary="User Tutorial" className="text"/>
              </MenuItem>
                 <MenuItem  component={Link} to="/Home/managenews" className={`${location.endsWith("managenews") && this.state.open?"activecolor":location.endsWith("managenews")?"circleactiveclr":null}`}>
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={icon12} /></div>
                </ListItemIcon>
                <ListItemText primary="News" className="text"/>
              </MenuItem>
                <MenuItem  component={Link} to="/Home/events" className={`${location.endsWith("events") && this.state.open?"activecolor":location.endsWith("events")?"circleactiveclr":null}`}>
                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={icon1} /></div>
                </ListItemIcon>
                <ListItemText primary="Events" className="text"/>
              </MenuItem>
            
                <MenuItem component={Link} to="/Home/approvaldashboard" className={`${activeclr && this.state.open ? "activecolor":activeclr && !this.state.open && "circleactiveclr"}`}>

                <ListItemIcon>
                  <div className="icon-container"><ReactSVG src={Approvalicon} className="User_img"/></div>
                </ListItemIcon>
                <ListItemText primary="Approval" className="text"/>
              </MenuItem>
              {this.state.open?<div className="under_change">Under Development</div>:null}
               <MenuItem>
                <ListItemIcon>
                  <div className="icon-container"><StorageIcon className="under_icon"/></div>
                </ListItemIcon>
                <ListItemText primary="Add Server" className="text"/>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <div className="icon-container"><PermDataSettingIcon className="under_icon"/></div>
                </ListItemIcon>
                <ListItemText primary="Configuration" className="text"/>
              </MenuItem>
            </MenuList>
           


          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
                    <Route path={`${this.props.match.path}/approvaldashboard`}  component={Dashboard} exact />
                    <Route path={`${this.props.match.path}/usertutorial`}  component={ManageTutorial} exact />
                    <Route path={`${this.props.match.path}/events`}  component={Events} exact />
                    <Route path={`${this.props.match.path}/maindashboard`}  component={MainDashboard} exact />
                    <Route path={`${this.props.match.path}/managenews`}  component={ManageNews} exact />
                    <Route path={`${this.props.match.path}/managecoach`}  component={ManageCoach_table} exact />
                    <Route path={`${this.props.match.path}/ManageTutorial`}  component={Usertutorial_table} exact />
                    <Route path={`${this.props.match.path}/approval`}  component={Approval} exact />
            <div>
              {children}
             
            </div>
          </main>
        </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

 