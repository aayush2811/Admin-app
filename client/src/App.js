// import React, {useEffect, useState} from 'react';
// import {useDropzone} from 'react-dropzone';

// function App(props) {
//   const [files, setFiles] = useState([]);
//   const {getRootProps, getInputProps} = useDropzone({
//     accept: 'image/*',
//     onDrop: acceptedFiles => {
//       setFiles(acceptedFiles.map(file => Object.assign(file, {
//         preview: URL.createObjectURL(file)
//       })));
//     }
//   });

//   // const thumbs = files.map(file => (
//   //   <div style={thumb} key={file.name}>
//   //     <div style={thumbInner}>
//   //       <img
//   //         src={file.preview}
//   //         style={img}
//   //       />
//   //     </div>
//   //   </div>
//   // ));

//   useEffect(() => {
//     // Make sure to revoke the data uris to avoid memory leaks
//     files.forEach(file => URL.revokeObjectURL(file.preview));
//   }, [files]);

//   return (
//     <section className="container">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside style={thumbsContainer}>
//         {thumbs}
//       </aside>
//     </section>
//   );
// }

// export default App


import {useState} from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";
import InstituteVerifierSignIn from "./Screens/Institute_Verifier_Signin";
import InstituteVerifierSignUp from "./Screens/Institute_Verifier_Signup";
import MainScreen from "./Screens/MainScreen";
//import Hashing from "./Screens/hashing";
import Uploaded from './Screens/Uploaded';
import Verifier from "./Screens/verifier";



 
function App() {
  const email = localStorage.getItem("email");
  // const [isPending , setIsPending] = useState(false)
  const [image] = useState(null)
  const [url , setUrl] = useState(null)
  // const [error , setError] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainScreen />} />
          <Route exact path="/Signin" element={<SignIn/>}/>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Instituteverifiersignin" element={<InstituteVerifierSignIn />} />
          <Route path="/Instituteverifiersignup" element={<InstituteVerifierSignUp />} />
          <Route path="/Verifier" element={<Verifier/>}/>
          <Route
            path="/Home"
            element={email ? <Home /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
       
    </div>

  );
}
 
export default App;