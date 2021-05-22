import React from 'react';
import Labelbox from '../../helpers/labelbox/labelbox'
import Paper from '@material-ui/core/Paper';
import './EventsAdd.css'
import { Switch,Upload} from 'antd'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { TimePicker } from 'antd';
import moment from 'moment';
export default class EventsAdd extends React.Component{
state = {
    value: null,
    time:moment().format('LTS'),
  };

  onChangeTime = time => {
    console.log(time);
    this.setState({ value: time });
  };
render()
{
const format = 'HH:mm ';
const Time="LT";
	return(

	<div>
	
	
	   <div className="events_grid">
	   <Grid container spacing={2} className="main_grid_cnt">
	   <Grid item xs={6} md={3}><Labelbox type="text" labelname=" Title"/></Grid>
	    <Grid item xs={6} md={3}><Labelbox type="text" labelname="Location"/></Grid>
	     <Grid item xs={6} md={3}><Labelbox type="datepicker" labelname="Start Date"/></Grid>
	      <Grid item xs={6} md={3}><Labelbox type="datepicker" labelname="End Date"/></Grid>
	      <Grid item xs={6} md={3} className="timepic_div"><div><label className="active">Start Time</label></div><TimePicker defaultValue={moment('12:08', format)} format={format} /></Grid>
	      <Grid item xs={6} md={3} className="timepic_div"><div><label className="active">End Time</label></div><TimePicker defaultValue={moment('02:04', format)} format={format} /></Grid>
	 
	      <Grid item xs={12} md={6}><Labelbox type="text" labelname="Partner"/></Grid>
	        <Grid item md={12} xs={12}>
	   
	        <Labelbox type="text" labelname="Tags"/>
            
         </Grid>
	       <Grid item xs={12} md={12} className="textarea_div"><Labelbox type="textarea" labelname="Description"/></Grid>
	        <Grid item xs={6} md={6} className="text"><Labelbox type="text" labelname="Twitter Handle"/></Grid>
	         <Grid item xs={6} md={6} className="text"><Labelbox type="text" labelname="Facebook Page"/></Grid>
	         <Grid item xs={6} md={6} className="text">
	          <div><label className="active">Images</label></div>
	          <Upload className="browse_files">
                      <div className="upload_butt">
                   <span></span><span className="browse_div"><Button className="button_browse">Browse</Button></span></div></Upload>
	         </Grid>
	         <Grid item xs={6} md={3}><Labelbox type="datepicker" labelname="Display Till"/>
	         </Grid>
	         <Grid item xs={6} md={3}>
	         <div><label className="active">Active</label></div>
	            <Switch defaultChecked onChange={this.onChange}/>
	         </Grid>
             <Grid item xs={12} md={12} className="button_css">
                <Button variant="contained" className="cancel_butt" onClick={(e)=>this.props.closemodal(false)}>Cancel</Button>
                <Button variant="contained" className="submit_butt" onClick={(e)=>this.props.closemodal(false)}>Submit</Button>
             </Grid> 
	         

        </Grid>
	   </div>
 
	</div>
	)
}	
}