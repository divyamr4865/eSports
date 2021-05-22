import React from 'react';
import Paper from '@material-ui/core/Paper';
import './Dashboard.css'
import Approvalicon from '../../images/Group 2883.svg'
import Divider from '@material-ui/core/Divider';
import Manage from '../../images/Home.svg'
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
export default class Dashboard extends React.Component
{
Approvalpush=()=>
{
  this.props.history.push('/Home/approval')
}
	render()
	{
	return(
	<div>
	  <Paper className="dash_paper">
    
          <Grid container spacing={3}>
          <Grid  item xs={12} md={6}>
            <div className="card child_div">
               <label className="head_title">Coach</label>
                 <div> 
                  <Grid container spacing={5}>
                      <Grid  item xs={12} md={6}>
                     <div className="card inner_child">
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">Approved</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">5,000</label>
                     </div>
                     </Grid>
                       <Grid  item xs={12} md={6}>
                     <div className="card inner_child">
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">Pending</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">1,500</label>
                     </div>
                     </Grid>
                      </Grid>
                 </div>
            </div>
            </Grid>
            <Grid  item xs={12} md={6}>
             <div className="card child_div">
               <label className="head_title">Coach Uploads</label>
                    
                  <Grid container spacing={3}>
                      <Grid  item xs={12} md={6}>
                     <div className="card inner_child">
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">Approved</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">10,000</label>
                     </div>
                     </Grid>
                       <Grid  item xs={12} md={6}>
                     <div className="card inner_child">
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">Pending</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">1,300</label>
                     </div>
                     </Grid>
                      </Grid>
             </div>

            </Grid> 

            <Grid  item xs={12} md={6}>
             <div className="card child_div">
               <label className="head_title">User Uploads</label>
                    
                  <Grid container spacing={3}>
                      <Grid  item xs={12} md={6}>
                     <div className="card inner_child" onClick={this.Approvalpush}>
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">Approved</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">25,000</label>
                     </div>
                     </Grid>
                       <Grid  item xs={12} md={6}>
                     <div className="card inner_child" onClick={this.Approvalpush}>
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">Pending</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">3,500</label>
                     </div>
                     </Grid>
                      </Grid>
             </div>

            </Grid> 

            <Grid  item xs={12} md={6}>
             <div className="card child_div">
               <label className="head_title">User Events</label>
                    
                  <Grid container spacing={3}>
                      <Grid  item xs={12} md={6}>
                     <div className="card inner_child">
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">Approved</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">68,000</label>
                     </div>
                     </Grid>
                       <Grid  item xs={12} md={6}>
                     <div className="card inner_child">
                        <span className="label_cnt"><img src={Approvalicon}/><label className="approve">pending</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">3,550</label>
                     </div>
                     </Grid>
                      </Grid>
             </div>

            </Grid>


        </Grid>  

           
	  </Paper>
	</div>
	)
	}
}

 
            
            