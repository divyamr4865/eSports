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
import "./TutorialView.css";
import { TiLocation, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Labelbox from '../../helpers/labelbox/labelbox'
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import Chip from '@material-ui/core/Chip';


const styles = {};
export default class TutorialView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cancel: null };
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
      
       
  
      
    

      <div className="tutorial_container">
        <div>
        <Grid container className="tutorial_one" spacing={3}>

      <Grid item xs={3} md={3}><div className="coach_head">Tutorial Title</div><span className="coach_cnt">Basic</span></Grid>
        
          <Grid item xs={3} md={3}><div className="coach_head">Author</div><span className="coach_cnt">Melon</span></Grid>
        
         <Grid item xs={3} md={3}><div className="coach_head">Created Date</div><span className="coach_cnt">26-APR-2020</span></Grid>
    

    
   
      <Grid item xs={3} md={3}>
       
    </Grid>
      

       
          <Grid item xs={3} md={3}><div className="coach_head">Tags</div><span className="coach_cnt">Basics</span></Grid>
       
         <Grid item xs={3} md={3}> <div className="coach_head">Cost</div><span className="coach_cnt">25</span></Grid>
      
         <Grid item xs={3} md={3}> <div className="coach_head">Cost Discount</div><span className="coach_cnt">25</span></Grid>
    

        <Grid item xs={3} md={3} className="swictch_on">
            <div><div><label className="active">Active</label></div>
              <Switch defaultChecked onChange={this.onChange}/></div>
      
        </Grid>
   
    </Grid></div>

  
  </div>
    <div className="tutorial_modal_div_two"/>
      <div className="tutorial_buttons">
      <Button className="tutorial_approve">Approve</Button>
      <Button className="tutorial_reject" onClick={()=>this.props.closemodal(false)}>Reject</Button>
      <Button className="tutorial_back" onClick={()=>this.props.closemodal(false)}>Back</Button>

    </div>
       
        
      </div>
    );
  }
}

 