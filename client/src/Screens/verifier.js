import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { pinJSONToIPFS } from "@pinata/sdk";


export default function Verifier() {
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);


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

  const verifyFile = async (file) => {
    const expectedCID = localStorage.getItem("fileCID");
    const uploadedCID = await uploadFile(file);
    if (uploadedCID === expectedCID) {
      setVerified(true);
      setMessage(true);
    } else {
      setVerified(false);
      setMessage(true);
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
    await verifyFile(file);
  };

  return (
    <div>
    
      <br />
      <br />
      <input type="file" onChange={handleVerify} />
      <br />
      <br />
      <button style={button} disabled={!localStorage.getItem("fileCID")} onClick={() => setMessage(true)}>
        {" "}
        Verify
      </button>
      <br />
      <br />
      {message && (
        <h3>{verified ? "Verified!" : "Not Verified."}</h3>
      )}
    </div>
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
