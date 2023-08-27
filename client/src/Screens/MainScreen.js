import React from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-particles"
import {Card,Grid,Typography,Avatar,AppBar, Toolbar, IconButton} from "@material-ui/core"
import Button from "@material-ui/core/Button";

const particleOpt = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
export default function MainScreen() {
  const email = localStorage.getItem("email");
  const account = localStorage.getItem("account");
 
  const navigate = useNavigate();
    return (
      <div
      style={{
        height: "100vh",
        backgroundColor: "#2196f3",
        
        flexDirection: "column",
      }}
      >
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Document Management System
          </Typography>
          
        </Toolbar>
      </AppBar>
        <div style={{ height: "calc(100vh - 64px)", backgroundColor: "#2196f3",display: "flex", justifyContent: "center", alignItems: "center"  }}>
        <Particles params={particleOpt} />

        <div style={{ position: "absolute", top: "50px", left: "50px"}}>
          <Grid container justify="center">
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "150px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "480px",
                    backgroundColor: "#e3f2fd",
                    marginTop:"50px"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Institute
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "150px", height: "150px",borderRadius:"50%",overflow:"hidden" ,marginTop:"20px"}}>
                      <img
                        src="https://sudhirnanavati.in/images/gls.jpg"
                        alt=""
                        style={{ height: "100%", width:"100%",objectFit:"fill"}}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "50px 50px 10px 50px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate("/Signin");
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "50px 50px 10px 25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate("/Signup");
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
            <Grid item md={6} />
            <Grid item md={3}>
              <div
                style={{ position: "absolute", marginLeft: "750px" }}
                className="shadow"
              >
                <Card
                  style={{
                    width: "400px",
                    height: "480px",
                    backgroundColor: "#e3f2fd",
                    marginTop:"50px"
                  }}
                >
                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", padding: "25px" }}
                  >
                    Institute Verifier
                  </Typography>
                  <Grid container justify="center">
                    <Avatar style={{ width: "150px", height: "150px",borderRadius:"50%",overflow:"hidden" ,marginTop:"20px"}}>
                      <img
                        src="https://img.freepik.com/premium-vector/document-verification-concept-with-hand-magnifier-paper-sheets-green-check-mark-tick-it_503038-568.jpg"
                        alt=""
                        style={{ height: "100%", width:"100%",objectFit:"fill"}}
                      />
                    </Avatar>
                  </Grid>
                  <Grid container justify="center">
                    <Button
                      style={{ margin: "50px 50px 10px 50px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate("/Instituteverifiersignin");
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      style={{ margin: "50px 50px 10px 25px" }}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate("/Instituteverifiersignin");
                      }}
                    >
                      Sign Up
                    </Button>{" "}
                  </Grid>
                </Card>
              </div>
            </Grid>
          </Grid>
          {/* <Particles params={particleOpt} /> */}
        </div>
        {/* {this.state.stud ? <Redirect to="/createstud" /> : null}
        {this.state.inst ? <Redirect to="/createinst" /> : null}
        {this.state.stud ? <Redirect to="/GoogleLoginS" /> : null}
        {this.state.inst ? <Redirect to="/GoogleLoginI" /> : null}
        {this.state.s ? <Redirect to="/StudentDashBoard" /> : null}
        {this.state.i ? <Redirect to="/InstituteDashBoard" /> : null} */}
      </div>
      </div>
      
    );
}