import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import dateFormat from 'dateformat';
import './Approval.css'
import Paper from '@material-ui/core/Paper';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import { Switch,Input} from 'antd'

import Labelbox from '../../helpers/labelbox/labelbox'
import AddIcon from '@material-ui/icons/Add';
import Approvalmodal from './approval_modal'
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
export default class Approval extends React.Component{

    state={
        openview:false,addopen:false
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
 onChange=(checked)=>{
  console.log(`switch to ${checked}`);
}
AddOpen=()=>
{
    this.setState({addopen:true});
}
handleclose=()=>
{
  this.setState({addopen:false});  
}

    render(){

         

const { Search } = Input;
        return(
            <div>
              <Paper className="mg_tutback">  
                <div className="md_cont">
                <div className="app_head">User Uploads Pending</div>
                <div className="approval_cnt">
                <Labelbox type="text" labelname="Title"/>
                <Labelbox type="text" labelname="User Id"/>
                  <Labelbox type="datepicker" labelname="From"/>
                    <Labelbox type="datepicker" labelname="To"/>
                    <div> <div><label className="active">Active</label></div>
                   <Switch defaultChecked onChange={this.onChange}/></div>
                </div>
               
                </div>
              
               
             
                <Tablecomponent
                
                 heading={[
                    { id: "", label: "S.No" },
                      { id: "date", label: " Date" },
                     { id: "type", label: "Type" },
                      { id: "userud", label: "User ID" },
                      { id: "title", label: "Title" },
                     { id: "", label: "Action" },
            
                    
                ]}
  

            rowdata={[
                this.createData({date:"12-APR-2020",type:"User Video",userid:"David 14",title: "Basic Rules",
            }),
               this.createData({date:"18-APR-2020",type:"User Tutorial",userid:"Melon king47",title: "New PSP",
            }),
               this.createData({date:"18-APR-2020",type:"User Media",userid:"New Man_AJ",title: "Rules of Football",
            }),
                
            ]}

    tableicon_align={""}
    modelopen={(e)=>this.modelopen(e)}
    alignheading="table_row_change"
    EditIcon="close"

  />
 
        
         <Modalcomp  visible={this.state.openview} title={"User Uploads Pending View"} closemodal={(e)=>this.closemodal(e)}
    
        >
        <Approvalmodal closemodal={(e)=>this.closemodal(e)}/>

        </Modalcomp> 
      

       
              
        </Paper>
        </div>
        )
    }
}

