import React from 'react'
import './UserView.css'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Radio,Select } from 'antd'
import Labelbox from '../../helpers/labelbox/labelbox'
import UserTable from './UserTable'
import Button from '@material-ui/core/Button';
const { Option } = Select;

export default class UserView extends React.Component{
	state = {
    value: 1,
  };
	onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

 handleChange=(value)=> {
  console.log(`selected ${value}`);
}
	render()
	{
	return(
	<div>
	<Grid container spacing={3} className="member_container">
	<Grid item xs={2} md={2}>
	   <div className="card card_userchg1">
	     <label className="inner_txtuser">Match Played</label>
	     <Divider className="div_use"/>
	     <label className="numbers">100</label>
	   </div>
	</Grid>
	<Grid item xs={2} md={2}>
	<div className="card card_userchg2">
	   <label className="inner_txtuser">Total Goals</label>
	     <Divider className="div_use"/>
	     <label className="numbers">20,000</label>
	</div>
	</Grid>
	<Grid item xs={2} md={2}>
	<div className="card card_userchg3">
	   <label className="inner_txtuser">Total Win</label>
	     <Divider className="div_use"/>
	     <label className="numbers">Euros-3000</label>
	</div>
	</Grid>
	<Grid item xs={2} md={2}>

	   <div className="card card_userchg4">
	      <label  className="inner_txtuser">Win Balance</label>
	     <Divider className="div_use"/>
	     <label className="numbers">Euro-2000</label>
	   </div>
	</Grid>   
	<Grid item xs={2} md={2}>
	   <div className="card card_userchg5">
	       <label className="inner_txtuser">Referral Balance</label>
	     <Divider className="div_use"/>
	     <label className="numbers">Euro-100</label>
	   </div>
	</Grid>
	<Grid item xs={2} md={2}>
	   <div className="card card_userchg6">
	        <label className="inner_txtuser">Total Balance</label>
	     <Divider className="div_use"/>
	     <label className="numbers">Euro-2100</label>
	   </div>
	</Grid>
	</Grid>
	    <div  className="active_mem">Member Details</div>
	  <Grid container spacing={3} className="member_container">
	  
	  <Grid item xs={3} md={3}><Labelbox type="text" labelname="First Name"/></Grid> 
	  <Grid item xs={3} md={3}><Labelbox type="text" labelname="Last Name"/></Grid>
	   <Grid item xs={3} md={3}><Labelbox type="text" labelname="User Name"/></Grid>
	   <Grid item xs={3} md={3}><Labelbox type="text" labelname="Password"/></Grid>
	   <Grid item xs={3} md={3}><Labelbox type="text" labelname="Referral No."/></Grid>
	   <Grid item xs={3} md={3}><Labelbox type="text" labelname="Email"/></Grid>
	   <Grid item xs={3} md={3}><Labelbox type="text" labelname="Mobile No."/></Grid>
	   <Grid item xs={3} md={3}><Labelbox type="datepicker" labelname="Date of Birth"/></Grid>
	   <Grid item md={12} xs={12} className="active_radio">
		 <div><label className="active">Gender</label></div>
		<Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>Male</Radio>
        <Radio value={2}>Female</Radio>
        <Radio value={3}>Others</Radio>
      </Radio.Group>
   
		</Grid>
		 <div  className="active_mem">Wallet(Coins)</div>
		  <Grid container spacing={3} className="member_container">
          

		  <Grid item xs={4} md={3}>
            
		  <Labelbox type="text" labelname="Amount"/></Grid>
		  <Grid item xs={4} md={3}><div  className="active">Wallet</div>
		   <Select defaultValue="Select"  onChange={this.handleChange} className="sel_wal">
      <Option value="Referral Money">Referral Money</Option>
       <Option value="Win Money">Win Money</Option>
        <Option value="Joining Money">Joining Money</Option>
         <Option value="Betting Money">Betting Money</Option>
    </Select>
		  </Grid>
		  <Grid item xs={12} md={9} className="cmt_div"><Labelbox type="textarea" labelname="Comment"/></Grid>
		</Grid>
		<Grid item xs={12} md={12} className="button_css">
                
                <Button variant="contained" className="submit_butt" onClick={(e)=>this.props.closemodal(false)}>Update</Button>
                <Button variant="contained" className="cancel_user" onClick={(e)=>this.props.closemodal(false)}>Cancel</Button>
             </Grid> 
		</Grid>
	
	   <Grid container spacing={3} className="member_container">
	   <Grid item xs={12} md={12}>
	   <UserTable/>
	   </Grid>
	     
	   </Grid>	
	</div>
	)
	}
}