import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers2";
import { useNavigate } from "react-router-dom";
import {Card,Grid,Typography,Avatar,AppBar, Toolbar, IconButton} from "@material-ui/core"
import Button from "@material-ui/core/Button";
export default function InstituteVerifierSignIn() {
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
      const res = await auth.methods.instituteverifiersList(email).call();
 
      if (res.password === password) {
        localStorage.setItem("email", email);
        localStorage.setItem("account", accounts);
        navigate("/Verifier");
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
        src="https://img.freepik.com/premium-vector/document-verification-concept-with-hand-magnifier-paper-sheets-green-check-mark-tick-it_503038-568.jpg"
        style={image}
        alt="verify"
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
          navigate("/Instituteverifiersignup");
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