import React,{ Component }  from "react";
import './approval_modal.css'
import Labelbox from "../../helpers/labelbox/labelbox";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class Approvalmodal extends Component{
    render(){
        return(
            <div className="container_div">
               
                <div className="label_approvaldiv">
               <Grid container>
               <Grid item xs={12} md={8}>
    <div className="tutorial_content_list">
        <div style={{width:"140px"}}>
         <div className="coach_head">User ID</div><span className="coach_cnt">David 14</span></div>
        <div style={{width:"140px"}}>
         <div className="coach_head">Title</div><span className="coach_cnt">Super Kicks</span></div>
        <div style={{width:"140px"}}>
         <div className="coach_head">Type</div><span className="coach_cnt">User video</span></div>
    </div>

    </Grid>
    </Grid>
                </div>

                <div className="blank"></div>
                <div className="grid_maindiv">
                    <Grid container>
                        <Grid item={6} md={6}>
                            <label className="videos_title">Videos</label>
                            <div className="divgrid_approval">
                                <h5>1</h5>
                                <h5 className="vid_id">Vid000125</h5>
                                <VisibilityIcon  className="view_icon"/>
                            </div>

                            <div className="divgrid_approval2">
                                <h5>2</h5>
                                <h5  className="vid_id">Vid000125</h5>
                                <VisibilityIcon  className="view_icon"/>
                            </div>

                            <div className="divgrid_approval">
                                <h5>3</h5>
                                <h5  className="vid_id">Vid000125</h5>
                                <VisibilityIcon  className="view_icon"/>
                            </div>
                        </Grid>

                        <Grid item={6} md={6}>
                        <label className="videos_title">Images</label>
                            <div className="divgrid_approval">
                                <h5>1</h5>
                                <h5  className="vid_id">Vid000125</h5>
                                <VisibilityIcon  className="view_icon"/>
                            </div>

                            <div className="divgrid_approval2">
                                <h5>2</h5>
                                <h5  className="vid_id">Vid000125</h5>
                                <VisibilityIcon  className="view_icon"/>
                            </div>

                            <div className="divgrid_approval">
                                <h5>3</h5>
                                <h5  className="vid_id">Vid000125</h5>
                                <VisibilityIcon  className="view_icon"/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="btn_div">
                    <div className="approve_btndiv">
                        <Button variant="outlined" color="green" className="approve_btn" onClick={()=>this.props.closemodal(false)}>Approve</Button>
                    </div>
                    <div className="approve_btndiv2">
                        <Button variant="outlined" color="red" className="approve_btn2" onClick={()=>this.props.closemodal(false)}>Reject</Button>
                    </div>
                    <div className="approve_btndiv3">
                        <Button variant="outlined" color="red" className="approve_btn3" onClick={()=>this.props.closemodal(false)}>Back</Button>
                    </div>
                </div>
            </div>
        )
    }
}






















// import React,{ Component }  from "react";
// import './approval_modal.css'
// import Modalcomp from "../../helpers/ModalComp/Modalcomp";
// import Button from '@material-ui/core/Button';

// export default class Approvalmodal extends Component{

//     state={
//         openview:""
//     }

//         modelopen=(data)=>{
//             if(data==="view"){
//                 this.setState({openview:true})
//             }
//             else if(data==="edit"){
//                 this.setState({editopen:true})
//             }
//         }

//         closemodal=()=>{
//                 this.setState({openview:false,editopen:false})
//         }


//     render(){
//         const styles = "";
//         const { classes, onClose, cancel, selectedValue, ...other } = this.props;
//         return(
//             <div>

//                 <Button type="primary" onClick={this.state.modelopen}>View</Button>
//                 <Modalcomp  onClose={this.closemodal}  
//                     xswidth={"md"}>
//                         <div>
//                             <div className="approval_viewtitle"> Approval View</div>
//                         </div>
//                 </Modalcomp>
//             </div>
//         )
//     }
// }

