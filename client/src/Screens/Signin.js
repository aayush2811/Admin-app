// // calling smart contract map methods
// const res = await auth.methods.usersList(email).call();
        
// // In res the is username , password and email
// // checking input password with stored password
// if (res.password === password)
// {   
     
//     // storing user details in local storage
//     localStorage.setItem("email", email);
         
//     localStorage.setItem("account", accounts);
//     navigate("/Home"); // navigate to home page
// }
// else
// {
//     alert("wrong user credentials or please signup");
// }
import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";
import {Card,Grid,Typography,Avatar,AppBar, Toolbar, IconButton} from "@material-ui/core" 
import Button from "@material-ui/core/Button";
export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
 
  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);
 
  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();
 
    setAccounts(accounts);
    setAuth(auth);
  };
 
  const login = async () => {
    if (!email || !password) {
      alert("please fill all details");
 
      return;
    }
 
    try {
      const res = await auth.methods.adminsList(email).call();
 
      if (res.password === password) {
        localStorage.setItem("email", email);
        localStorage.setItem("account", accounts);
        navigate("/Home");
      } else {
        alert("wrong user credentials or please signup");
      }
    } catch (error) {
      alert(error.message);
    }
  };
 
  React.useEffect(() => {
    loadWeb3();
  }, []);
 
  React.useEffect(() => {
    loadAccounts();
  }, []);
 
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Document Management System
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
        </Toolbar>
      </AppBar>
      <div style={rootDiv}>
      <img
        src="data:image/png;base64,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"
        style={image}
        alt="geeks"
      />
      <input
        style={input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
      />
      <input
        style={input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button style={button} onClick={login}>
        {" "}
        Sign In
      </button>
 
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/Signup");
        }}
      >
        {" "}
        Create new account{" "}
      </span>
    </div>
    </div>
    
  );
}
 
const rootDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};
 
const input = {
  width: 300,
  padding: 10,
  margin: 10,
  borderRadius: 10,
  outline: "none",
  border: "2px solid grey",
  fontSize: 17,
};
 
const button = {
  width: 325,
  padding: 10,
  borderRadius: 10,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};
 
const image = {
  width: 70,
  height: 70,
  objectFit: "contain",
  borderRadius: 70,
};