import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import dateFormat from 'dateformat';
import './Events.css'
import Paper from '@material-ui/core/Paper';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import { Switch,Input} from 'antd'
import AddIcon from '@material-ui/icons/Add';
import EventsAdd from './EventsAdd'
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
export default class Events extends React.Component{

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
                <div className="mgparent_srch">
                <span className="mg_head">Events</span>
                <div className="mgchild_srch">
                  <Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton />
   
                 <AddIcon className="Add_tut" onClick={this.AddOpen}/>
                </div>
               
                </div>
                 <Modalcomp  visible={this.state.addopen} title={" Create Events"} closemodal={this.handleclose}>
        <EventsAdd closemodal={this.handleclose}/>
        </Modalcomp>
               
             
                <Tablecomponent
                
                 heading={[
                    { id: "", label: "S.No." },
                    { id: "title", label: "Title" },
                    { id: "location", label: "Location" },
                    { id: "partner", label: "Partner" },
                    { id: "active", label: "Active" },
                     { id: "", label: "Action" },
            
                    
                ]}
  

            rowdata={[
                this.createData({title: "Basic Rules", location:"Chennai",partner:"Melon",active:
                <span><Switch defaultChecked onChange={this.onChange} /></span>
            }),
               this.createData({title: "Pitch Layout", location:"Kovai",partner:"Leesan",active:
                <span><Switch defaultChecked onChange={this.onChange} /></span>
            }),
               this.createData({title: " Rules of Football", location:"Chennai",partner:"Prabu",active:
                <span><Switch defaultChecked onChange={this.onChange} /></span>
            }),
                
            ]}

    tableicon_align={""}
    modelopen={(e)=>this.modelopen(e)}
  
    alignheading="table_row_change"

  />
 
        
        {/* <Modalcomp  visible={this.state.openview} title={"View details"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"xs"}
        >
        </Modalcomp> */}
      

        <Modalcomp  visible={this.state.editopen} title={"Edit Events"} closemodal={(e)=>this.closemodal(e)}

        >
          <EventsAdd onClick={()=>this.props.closemodal(false)}/>
        </Modalcomp>
              
        </Paper>
        </div>
        )
    }
}

