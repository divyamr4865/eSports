import React from 'react';
import Labelbox from '../../helpers/labelbox/labelbox'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Switch,Upload} from 'antd'
import './ManageNewsAdd.css'
import ManageDndTable from './ManageDndTable'
import { Radio } from 'antd'
import AddTags from './tags'
export default class ManageNewsAdd extends React.Component{
 state = {
    value: 1,
  };
	onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

	render(){
		return(
		<div className="manage_tutorial_add">
		<Grid container spacing={1}>
		<Grid item md={4} xs={4}><Labelbox type="text" labelname="News Title"/></Grid>
		
		<Grid item md={4} xs={4}><Labelbox type="text" labelname="Created Date"/></Grid>
		<Grid item md={4} xs={4}><Labelbox type="text" labelname="Source"/></Grid>
	     <Grid item md={12} xs={12}>
	    <div><label className="active">Tags</label></div>

	    <div className="tag_div">
	    <AddTags/>
	    </div>
            
         </Grid>
            
       
           <Grid item xs={12} md={12} className="textarea_div"><Labelbox type="textarea" labelname="Description"/></Grid>
		<Grid item md={2} xs={6}><Labelbox type="datepicker" labelname="Start Date"/></Grid>
		
		<Grid item md={2} xs={6}><Labelbox type="datepicker" labelname="End Date"/></Grid>
		      <Grid item md={6} xs={6}>
		       <div><label className="active">Media</label></div>
	          <Upload className="browse_files">
                      <div className="upload_butt">
                   <span></span><span className="browse_div"><Button className="button_browse">Browse</Button></span></div></Upload>
	         </Grid>
	         <Grid item xs={2} md={2} className="active_swth">

	         <div><label className="active">Active</label></div>
	            <Switch defaultChecked onChange={this.onChange}/>
	         </Grid>
	         <div  className="media_arrborder"></div>
	
	     <Grid item xs={12} md={8}>
	     <div><label className="active">Media Arrange</label></div>
	        <ManageDndTable/>
	     </Grid>    
	      <Grid item xs={12} md={12} className="button_css">
             <Button variant="contained" className="cancel_butt" onClick={()=>this.props.closemodal(false)}>Cancel</Button>
             <Button variant="contained" className="submit_butt"  onClick={()=>this.props.closemodal(false)}>Submit</Button>
           </Grid>     
   </Grid>
   </div>
	)
	}
}