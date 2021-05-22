import React, { Component } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { lighten, makeStyles, fade } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Icon, message, Popconfirm,Switch } from "antd";
import "./ManageCoach_table.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import CoachView from "./CoachView";
import "./Manage_coach.css";
import { Input } from "antd";
import AddIcon from '@material-ui/icons/Add';

class ManageCoach_table extends React.Component{

  state={
      openview:false
  }

  createData=(parameter) =>{
      var keys=Object.keys(parameter)
      var values=Object.values(parameter)

      var returnobj={}
      
      for(var i=0;i<keys.length;i++){
      returnobj[keys[i]]=values[i]
      }
      return(returnobj)
      }

      modelopen=(data)=>{
          if(data==="view"){
              this.setState({openview:true})
          }
          else if(data==="edit"){
              this.setState({editopen:true})
          }
      }

      closemodal=()=>{
              this.setState({openview:false,editopen:false})
      }


  render(){
    const { Search } = Input;

      return(
          <div>

            <Paper className="mg_tutback">  
                <div className="mgparent_srch">
                <span className="mg_head">Manage Coach</span>
                <div className="mgchild_srch">
                  <Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton />
   
               
                </div>
               
                </div>
           
              <Tablecomponent
              
               heading={[
                  { id: "", label: "S.No." },
                  { id: "coach_name", label: "Coach Name" },
                  { id: "user_id", label: "User Id" },
                  { id: "followers", label: "Followers" },
                  { id: "Since", label: "Since" },
                  { id: "Active", label: "Active" },
                
                  { id: "", label: "Action" }
              ]}


          rowdata={[
              this.createData({coach_name: "Melon Kingson", user_id: "Melking47", followers:"20417", Since:"11 Mar 2018",Active:<span><Switch defaultChecked onChange={this.onChange}/></span> }),
              this.createData({coach_name: "Leeson", user_id: "Leeson3", followers:"30025", Since:"21 Dec 2018",Active:<span><Switch defaultChecked onChange={this.onChange}/></span>  }),
              this.createData({coach_name: "Raj Prabu", user_id: "Rajprabu5", followers:"51596", Since:"11 Mar 2018",Active:<span><Switch defaultChecked onChange={this.onChange}/></span>  }),

          ]}

  tableicon_align={""}
  modelopen={(e)=>this.modelopen(e)}
  // EditIcon="close"
  // DeleteIcon="close"
/>

      
     

      <Modalcomp  visible={this.state.openview} title={"View Manage Coach"} closemodal={(e)=>this.closemodal(e)}
     
      >
      <CoachView closemodal={(e)=>this.closemodal(e)}/>
      </Modalcomp>
            
     </Paper>
      </div>
      )
  }
}

export default ManageCoach_table;















