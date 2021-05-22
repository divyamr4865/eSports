import React from "react";
import Eye from "../../images/eye.svg";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Logo from "../../images/logo.svg";
import "./Login.css";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from "@material-ui/icons/Visibility";
import Button from '@material-ui/core/Button';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "", hidden: true };
  }
  toggleshow = () => {
    this.setState({ hidden: !this.state.hidden });
    console.log("i am clicked", this.state.hidden);
  };
  onchange = (e) => {
    this.setState({ password: e.target.value });
  };
  dashboardpush=()=>
  {
    this.props.history.push('/Home/maindashboard')

  }

  render() {
    return (
      <div className="login_cnt_main">
        <Grid container className="logo_login_cnt">
          <Grid item md={6} xs={6} className="logo_cnt">
          <div className="logo_container">
          
            <img className="soccer_logo" src={Logo} alt="error" />{" "}
          
            </div>
          </Grid>
          <Grid item md={6} xs={12} className="input_login">
          <div className="input_field_par">
            <div className="input_child">
              <div>
                <div className="user_name">
                  <TextField
                    type="text"
                      placeholder=""
                    label="Username"
                  
                  />
                </div>
              </div>
              <div>
                <div className="pass_word">
                  <TextField
                    type={this.state.hidden ? "password" : "text"}
                    onChange={this.onchange}
                    value={this.state.password}
                    placeholder=""
                    className=""
                    label="Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <IconButton onClick={this.toggleshow}>
                           {this.state.hidden?<VisibilityOff
                              className="logineye_icon"/>:
                              <Visibility
                              className="logineye_icon"/>}
                    
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className="input_login">
               <Button className="input_child_login" onClick={this.dashboardpush}>Login</Button>
              
              </div>
              <a href="#" className="forgot_link">
                Forgot Password?{" "}
              </a>
            </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Login;
