import * as React from "react";
import { useRef } from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers2";
import {Card,Grid,Typography,Avatar,AppBar, Toolbar, IconButton} from "@material-ui/core"
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
export default function InstituteVerifierSignUp() {
  const [username, setUsername] = React.useState("");
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
 
  const signUp = async () => {
    if (!username || !email || !password) {
      alert("please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      return;
    }
    try {
      await auth.methods
        .createInstituteVerifier(username, email, password)
        .send({ from: accounts });
 
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      navigate("/Instituteverifiersignin");
      window.location.reload();

    } catch (e) {
      console.log(e.message);
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
        src="https://img.freepik.com/premium-vector/document-verification-concept-with-hand-magnifier-paper-sheets-green-check-mark-tick-it_503038-568.jpg"
        style={image}
        alt="verify"
      />
      <input
        style={input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
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
      <button style={button} onClick={signUp}>
        {" "}
        Sign Up
      </button>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/Instituteverifiersignin");
        }}
      >
        {" "}
        Already have an account?{" "}
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