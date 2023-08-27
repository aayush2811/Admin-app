// import { useCallback, useState } from 'react'
// import {useDropzone} from 'react-dropzone'
// import bgimage from '../assets/image.svg'
// import {Card,Grid,Typography,Avatar,AppBar, Toolbar, IconButton} from "@material-ui/core" 
// import Button from "@material-ui/core/Button";

// const Form = ({image , setImage , isPending , setIsPending , url , setUrl , setError}) => {
    
    

//     const uploadImage = async(image) => {
//        setError(false)
//        setIsPending(true)
//        const formData = new FormData()
//        formData.append('image' , image)
//        try{
//            const res = await fetch('http://localhost:5000/upload',{
//            method : 'POST',
//            body : formData,
//            'content-type': 'multipart/form-data'
//            })
//            if(!res.ok){
//             throw Error('Internal Server Error')
//            }
//            const data = await res.json()
//            setUrl(data.path)
//            setIsPending(false)
//        }catch(error){
//            console.log(error)
//            setIsPending(false)
//            setError(true)
//        }
//     }



//     const onDrop = useCallback(async(acceptedFiles) => {
      
//        let file = acceptedFiles[0]
//        let reader = new FileReader()

//        reader.readAsDataURL(file)
//        reader.onload = () => {
//          setImage(reader.result)
//          uploadImage(file)
//        }
       
//     } , [setImage])

//     const {getRootProps , getInputProps , open} = useDropzone({onDrop , 
//                                                                maxFiles:1 , 
//                                                                accept : {'image/*' : ['.png', '.jpg', '.jpeg', '.gif'], 'application/pdf': ['.pdf'], 'application/msword': ['.doc', '.docx']},
//                                                                noClick : true ,
//                                                                noKeyboard : true})

//   return (
//     <div className='flex flex-col h-[50vh] drop-shadow-lg p-5 justify-between bg-white w-4/5 md:w-2/6 sm:w-4/6 rounded-md'>
//       <p className='text-center font-semibold text-lg md:text-xl mb-2'>Upload your File</p>
//       <p className='text-center font-thin text-xs text-slate-400 mb-2'>File should be .pdf, .doc,Jpeg , Png...</p>
//       <div  {...getRootProps({className :'md:h-52 sm:h-44 h-auto bg-light-grey border-2 border-light-blue border-dashed rounded-md'})}>
//          <input {...getInputProps({name : 'image'})}/>
//          <img src={bgimage} className='max-w-1/3 mx-auto mt-4' />
//          <p className='text-slate-400 md:text-md text-center mt-4 text-sm'>Drag & Drop your File here</p>
//       </div>
//       <p className='text-center font-normal text-slate-400 text-md mt-2 mb-2'>Or</p>
//       <button onClick={open} className='bg-blue text-white font-normal p-1 rounded-lg w-auto mx-auto px-4 py-2 text-md'>Choose a file</button>
//     </div>
//   )
// }

// export default Form


import React,{useState} from "react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
const email = localStorage.getItem("email");
const account = localStorage.getItem("account");
const [file, setFile] = useState(null);
const [message, setMessage] = useState("");


const navigate = useNavigate();

const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           pinata_api_key: "2e4bc76edfa660bcb6ee",
//           pinata_secret_api_key: "be52154cef1bc02c89bad49a9f78e207f027151743a8f6dc555ebfb27263c042",
//         },
//       });
//       console.log(response.data);
//       const { IpfsHash } = response.data;
// setUploadMessage(`File uploaded successfully! Hash: ${IpfsHash}`);    } catch (error) {
//       console.error(error);
//       setUploadMessage("File could not be uploaded.");
//     }
//   };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            pinata_api_key: "2e4bc76edfa660bcb6ee",
            pinata_secret_api_key: "be52154cef1bc02c89bad49a9f78e207f027151743a8f6dc555ebfb27263c042",
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        }
      );
      return response.data.IpfsHash;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    const cid = await uploadFile(file);
    if (cid) {
      localStorage.setItem("fileCID", cid);
      setMessage("File uploaded successfully.");
    } else {
      setMessage("File upload failed.");
    }
  };

  const handleVerify = async (event) => {
    const file = event.target.files[0];
    //await verifyFile(file);
  };

return (

    <div>
      <h3>Your account: {account} </h3>
      <h3>Your email: {email} </h3>
      <h3>{message}</h3>
      <input type="file" onChange={handleUpload}/>
      <button
        style={button}
        onClick={uploadFile}
        disabled={!file}
      >
        Upload File
      </button>
      
      <button
        style={button}
        onClick={() => {
          localStorage.removeItem("email");
          localStorage.removeItem("account");
          window.location.reload();
        }}
      >
        {" "}
        Log out
      </button>
      
    </div>

  
  // <h3>Your account: {account} </h3>
  // <h3>Your email: {email} </h3>
  // <button
  //   style={button}
  //   onClick={() => {
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("account");
  //   window.location.reload();
  //   }}
  // >
  //   {" "}
  //   Log out
  // </button>
  // </div>
);
}
const button = {
width: 100,
padding: 10,
borderRadius: 5,
margin: 10,
cursor: "pointer",
fontSize: 17,
color: "white",
backgroundColor: "#9D27CD",
border: "none",
};