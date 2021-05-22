import React from "react";
import "./Dashboard.css";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import user from "../../images/Home.svg";
import coaches from "../../images/Group 2655.svg";
import news from "../../images/Asset 2.svg";
import events from "../../images/Group 2657.svg";
import communities from "../../images/Group 2658.svg";
import youtube from "../../images/Group 2663.svg";
import twitchtv from "../../images/Group 2662.svg";
import fitness from "../../images/Group 2661.svg";
import userupload from "../../images/Group 2660.svg";
import coach from "../../images/Group 2659.svg";
import categories from "../../images/Group 2664.svg";
import products from "../../images/Group 2665.svg";
import order from "../../images/Group 2666.svg";
import subcription from "../../images/Group 2667.svg";
import revenue from "../../images/Group 2668.svg";
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg'
class MainDashboard extends React.Component {
  render() {
    return (
      <div className="dashboard_card">
        <div className="default_background">
          <Paper className="paper_back">
            <div className="overall_card_align1">
              <div className="card common_parentcard" component={Link} to="/Home/usertutorial">
               <span className="label_cnt"><img src={user}/><label className="approve">User</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">4,20,493</label>
                
            
              </div>
              <div className="card common_parentcard" component={Link} to="/Home/managecoach">
               <span className="label_cnt"><img src={coaches}/><label className="approve">Coaches</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">1,649</label>
            
              </div>
              <div className="card common_parentcard" component={Link} to="/Home/managenews">
               <span className="label_cnt"><img src={news}/><label className="approve">News</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">87</label>
          
              </div>
              <div className="card common_parentcard" component={Link} to="/Home/events">
                  <span className="label_cnt"><img src={events}/><label className="approve">Events</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">24</label>
              </div>
              <div className="card common_parentcard" component={Link} to="/Home/managetutorial">
              
                  <span className="label_cnt"><img src={communities}/><label className="approve">Communities</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">19,432</label>
              </div>
            </div>
            <div className="video_text">Videos</div>
            <div className="overall_card_align2">
              <div className="card common_parentcard">
                  <span className="label_cnt"><img src={youtube}/><label className="approve">YouTube</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">14,926</label>
              </div>
              <div className="card common_parentcard">
                  <span className="label_cnt"><img src={twitchtv}/><label className="approve">Twitch.Tv</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">18,326</label>
              </div>
              <div className="card common_parentcard">
                 <span className="label_cnt"><img src={fitness}/><label className="approve">Fitness</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">23,423</label>
              </div>
              <div className="card common_parentcard">
                 <span className="label_cnt"><img src={userupload}/><label className="approve">User Uploads</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">1,47,924</label>
              </div>
              <div className="card common_parentcard">
                  <span className="label_cnt"><img src={coach}/><label className="approve">Coach</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">1,893</label>
              </div>
            </div>
            <div className="overall_card_align3">
              <div className="card common_parentcard">
                 <span className="label_cnt"><img src={categories}/><label className="approve">Categories</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">147</label>
              </div>
              <div className="card common_parentcard">
                  <span className="label_cnt"><img src={products}/><label className="approve">Products</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">17,926</label>
              </div>
              <div className="card common_parentcard">
                 <span className="label_cnt"><img src={order}/><label className="approve">Orders</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">1,40,993</label>
              </div>
              <div className="card common_parentcard">
                  <span className="label_cnt"><img src={subcription}/><label className="approve">Subcriptions</label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">49,114</label>
              </div>
              <div className="card common_parentcard" component={Link} to="/Home/approval">
                <span className="label_cnt"><img src={revenue}/><label className="approve">Revenue € </label></span>
                        <Divider className="divider"/>
                        <label className="label_cnt">9,27,432</label>
                
              </div>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
export default MainDashboard;
