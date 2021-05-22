import React from "react";
import Tablecomponent from "../../helpers/TableComponent/TableComp"
import Modalcomp from "../../helpers/ModalComp/Modalcomp";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import "./Usertutorial_table.css"
import TutorialView from './TutorialView'
import { Switch,Input} from 'antd';
import 'antd/dist/antd.css';
import "./User_tutorial.css";
import Paper from '@material-ui/core/Paper';

class Usertutorial_table extends React.Component{

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
                        <div className="manage_user_tut">
                      <span className="mg_head">Manage User Tutorial</span>
                         <Search placeholder="Search " style={{width:"180px"}} className="search_button" onSearch={value => console.log(value)} enterButton />
                         </div>
                <div className="tutorial_div" />
           
                <Tablecomponent
                
                 heading={[
                    { id: "", label: "S.No." },
                    { id: "user_id", label: "User Id" },
                    { id: "title", label: "Title" },
                    { id: "date", label: "Date" },
                    { id: "cost", label: "Cost €" },
                    { id: "active", label: "Active" }, 
                    { id: "", label: "Action" }
                ]}
  

            rowdata={[
                this.createData({user_id:"Melon King", title:"Basic Rules", date:"12 - Mar - 2020", cost:"14", active:<Switch className="tutorial_switch" defaultChecked/>}),
                this.createData({user_id:"David 14", title:"User Kicks", date:"20 - Mar - 2020", cost:"12", active:<Switch className="tutorial_switch" defaultChecked/>}),
                this.createData({user_id:"Newman Aj", title:"New PSP", date:"12 - Feb - 2020", cost:"10", active:<Switch className="tutorial_switch" defaultChecked/>}),

            ]}

    tableicon_align={""}
    modelopen={(e)=>this.modelopen(e)}
    // EditIcon="close"
    // DeleteIcon="close"
  />
 
        
        {/* <Modalcomp  visible={this.state.openview} title={"View details"} closemodal={(e)=>this.closemodal(e)}
        xswidth={"xs"}
        >
        </Modalcomp> */}
       

        <Modalcomp  visible={this.state.openview} title={"Manage User Tutorial View"} closemodal={(e)=>this.closemodal(e)}
    
        >
         <TutorialView closemodal={(e)=>this.closemodal(e)}/>
        </Modalcomp>
              
</Paper>
        </div>
        )
    }
}

export default Usertutorial_table;