import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import "./CoachView.css";
import { TiLocation, MdLocationOn, MdLocalPhone } from "react-icons/md";
import Labelbox from '../../helpers/labelbox/labelbox'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { IoIosGlobe } from "react-icons/io";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Select } from 'antd';
import Badge from '@material-ui/core/Badge';
import {Dropdown} from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../images/1.jpg'
import { Switch } from 'antd';
import 'antd/dist/antd.css';




function handleChange(value)
{
  console.log(`selected ${value}`);
}
const styles = {};
export default class CoachView extends React.Component {
constructor(props) {
super(props);
this.state = { cancel: null,
active:true };
}
handleClose = () => {
this.props.onClose(this.props.selectedValue);
};
open=()=>
{
this.setState({view:true})
}
onclose=()=>
{
this.setState({view:false})
}

render() {
const styles = "";
const { classes, onClose, cancel, selectedValue, ...other } = this.props;



return (
<div>


<Grid container className="coach_one" spacing={2}>
  <Grid item xs={12} md={8}>

  <div className="coach_content">
  <div style={{width:"140px"}}>
  <div className="coach_head">User Id</div><span className="coach_cnt">Melking47</span></div>
    <div style={{width:"140px"}}><div className="coach_head">First Name</div><span className="coach_cnt">Melon</span></div>
  
    <div style={{width:"140px"}}><div className="coach_head">Last Name</div><span className="coach_cnt">Kingson</span></div>
   
</div>

<div className="coach_content">
  <div style={{width:"140px"}}>
    <div className="coach_head">  Mobile</div><span className="coach_cnt">+91 9987563462</span></div>
    <div style={{width:"140px"}}>
    <div className="coach_head">Email</div><span className="coach_cnt">Melking@gmail.com</span></div>
   
    <div style={{width:"140px"}}>
    <div className="coach_head">Website</div><span className="coach_cnt">-</span></div>
   
</div>

<div className="coach_content">
  <div style={{width:"140px"}}>
    <div className="coach_head">Language</div><span className="coach_cnt">English</span></div>
    <div style={{width:"140px"}}>
    <div className="coach_head">Country</div><span className="coach_cnt">India</span></div>
    <div style={{width:"140px"}}>
    <div className="coach_head"> Location</div><span className="coach_cnt">Chennai</span></div>
</div>

<div className="coach_content">
  <div style={{width:"140px"}}>
  <div className="coach_head">Twitter</div><span className="coach_cnt">-</span></div>
    <div style={{width:"140px"}}>
   <div className="coach_head">Facebook</div><span className="coach_cnt">-</span></div>
    <div style={{width:"140px"}}>
   <div className="coach_head">PSP</div><span className="coach_cnt">-</span></div>
</div>

<div className="coach_content">
  <div style={{width:"140px"}}>
    <div className="coach_head">Twitch Tv</div><span className="coach_cnt">-</span></div>
    <div style={{width:"140px"}}>
    <div className="coach_head">YouTube Channel</div><span className="coach_cnt">-</span></div>
    <div style={{width:"140px"}}>
    <div className="coach_head">XBOX</div><span className="coach_cnt">-</span></div>
</div>

  </Grid>

  <Grid item xs={12} md={4}>
  <div className="profile_icon">
    <Avatar src={profile} />
    </div>
<div className="profile_name" >
  <h3>Melon Kingson</h3>
</div>

  <div className="coach_status">
    <p>Active</p>
</div>

<div className="status_switch">
    <Switch className="top" defaultChecked />
</div>

  </Grid>
</Grid>

<div  className="coach_divider_two"/>

<Grid  container className="coach_two" spacing={3}>

  <Grid item xs={4} md={2}>

  <div className="coach_content_two">
  <div style={{width:"140px"}}>
 <div className="coach_head">Followers</div><span className="coach_cnt">20,147</span></div>
  </div>

    </Grid>

    <Grid item xs={4} md={2}>

    <div className="coach_content_two">
    <div style={{width:"140px"}}>
     <div className="coach_head">Following</div><span className="coach_cnt">79</span></div>
    </div>

    </Grid>

    <Grid item xs={4} md={2}>

    <div className="coach_content_two">
    <div style={{width:"140px"}}>
  <div className="coach_head">Videos</div><span className="coach_cnt">2,000</span></div>
    </div>

    </Grid>

    <Grid item xs={4} md={2}>

    <div className="coach_content_two">
    <div style={{width:"140px"}}>
   <div className="coach_head">Programs</div><span className="coach_cnt">187</span></div>
    </div>

    </Grid>

    <Grid item xs={6} md={2}>

    <div className="coach_content_two">
    <div style={{width:"140px"}}>
    <div className="coach_head">Revenue €</div><span className="coach_cnt">4,200</span></div>
    </div>

    </Grid>

 <Grid item xs={12} md={12} className="button_css">
             <Button variant="contained" className="cancel_butt" onClick={()=>this.props.closemodal(false)}>Cancel</Button>
             <Button variant="contained" className="submit_butt"  onClick={()=>this.props.closemodal(false)}>Submit</Button>
             </Grid> 

</Grid>





</div>
);
}
}
















