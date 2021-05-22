import React, { Component } from "react";
import "./User_tutorial.css";
import { Select } from "antd";
import "antd/dist/antd.css";
import Moment from "react-moment";
import Usertutorial_table from "./Usertutorial_table";
import { Input } from "antd";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import dateFormat from 'dateformat';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Labelbox from "../../helpers/labelbox/labelbox";
import Paper from '@material-ui/core/Paper';

const current_date=(dateFormat(new Date(),"dd mmm yyyy"))

class User_tutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "rrr"
    };
  }

  render() {
    return (
      <div>
        <Paper>
          
          <div className="user_tutorial">

          <div className="usertutorial_title"> Manage User Tutorial</div>
               <Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton />
           
          </div>
        <Usertutorial_table />
        </Paper>
      </div>
    );
  }
}

export default User_tutorial;
