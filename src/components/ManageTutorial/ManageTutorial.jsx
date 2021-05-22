import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import dateFormat from 'dateformat';
import './ManageTutorial.css'
import Paper from '@material-ui/core/Paper';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import { Switch,Input} from 'antd'
import AddIcon from '@material-ui/icons/Add';
import UserView from './UserView'
import ManageTutorialAdd from './ManageTutorialAdd'
const current_date=(dateFormat(new Date(),"dd mmm yyyy"))
export default class ManageTutorial extends React.Component{

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
                <span className="mg_head">Manage User</span>
                <div className="mgchild_srch">
                  <Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton />
   
                 <AddIcon className="Add_tut" onClick={this.AddOpen}/>
                </div>
               
                </div>
                 <Modalcomp  visible={this.state.addopen} title={"Add Manage User"} closemodal={this.handleclose}
        
        >
        <ManageTutorialAdd  closemodal={this.handleclose}/>
        </Modalcomp>
               
             
                <Tablecomponent
                
                 heading={[
                    { id: "", label: "S.No." },
                    { id: "title", label: "Name" },
                    { id: "cost", label: "User Name"},
                    { id: "rating", label: "Email" },
                    { id: "view", label: "Mobile No." },
                    { id: "bought", label: "Referral No." },
                    { id: "active", label: "Status" },
                     { id: "", label: "Action" },
            
                    
                ]}
  

            rowdata={[
                this.createData({title: "Bjorn Brog", cost:"BrogFifa",rating:"borgyahoo.com",view:"88777333999",bought:"-",active:
                <span style={{color:"#0BDC5A"}}>Active</span>
            }),
               this.createData({title: "Mats Wila", cost:"FifaWasa",rating:"mats@gmail.com",view:"77663772772",bought:"-",active:
                <span  style={{color:"#FF2957"}}>Not Active</span>
            }),
             
            ]}

    tableicon_align={""}
    modelopen={(e)=>this.modelopen(e)}
  
    alignheading="table_row_change"
    EditIcon="close"

  />
 
        
     <Modalcomp  visible={this.state.openview} title={"Manage User View"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"lg"}
        >
        <UserView  closemodal={(e)=>this.closemodal(e)}/>
        </Modalcomp>
      

      
              
        </Paper>
        </div>
        )
    }
}

