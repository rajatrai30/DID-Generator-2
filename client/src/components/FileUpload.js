import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import Confetti from "react-dom-confetti";
import JSConfetti from "js-confetti";


const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const jsConfetti = new JSConfetti();
  const [showConfetti, setShowConfetti] = useState(false);
  const [displayText, setDisplayText] = useState('');


  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const claimRewards = async () => {
    try {
      if (contract && account) {
        // Show confetti when rewards are claimed
        jsConfetti.addConfetti({
          emojis: ["🎉"],
        });
  
        // Set hasUploadedFile to false to enable the "GET REWARDS" button again
        setHasUploadedFile(false);
  
        // Display the "Congrats you earned 2ETH" text
        setDisplayText('Congrats! You earned 2ETH');
        console.log('Text displayed:', displayText);
      }
    } catch (error) {
      console.error("Error claiming rewards:", error);
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `68cf08a246705c56e9c9`,
            pinata_secret_api_key: `bd9024392b38bb6bc799fe3a8e5c9bbd0eaad3b3c3af47cf9719239aed1157f8`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account,ImgHash);
        alert("Successfully File Uploaded");
        setFileName("No file selected");
        setFile(null);
        setHasUploadedFile(true); // Set to true after uploading a file
      } catch (e) {
        alert("Unable to upload file to Pinata");
      }
    }
    alert("Successfully File Uploaded");
    setFileName("No file selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choose File
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">FileName: {fileName}</span>
        <button
          type="submit"
          className="upload"
          disabled={!file}
        >
          Upload File
        </button>

        {/* Conditionally render the "GET REWARDS" button */}
        {hasUploadedFile && (
          <div>
            <button className="reward" onClick={claimRewards}>
              GET REWARDS
            </button>
           
          </div>
        )}
         <p className="displayText">{displayText}</p>
      </form>
    </div>
  );
};
export default FileUpload;

// import { useState } from "react";
// import axios from "axios";
// import "./FileUpload.css";
// function FileUpload({ contract, provider, account }) {
//   // const [urlArr, setUrlArr] = useState([]);
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("No image selected");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (file) {
//         try {
//           const formData = new FormData();
//           formData.append("file", file);

//           const resFile = await axios({
//             method: "post",
//             url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//             data: formData,
//             headers: {
//               pinata_api_key: `95f328a012f1634eab8b`,
//               pinata_secret_api_key: `8ea64e6b39c91631c66128a7c0e0dde35a6fbdf797a8393cc5ba8bf8d58e9b54`,
//               "Content-Type": "multipart/form-data",
//             },
//           });

//           const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
//           const signer = contract.connect(provider.getSigner());
//           signer.add(account, ImgHash);

//           //setUrlArr((prev) => [...prev, ImgHash]);

//           //Take a look at your Pinata Pinned section, you will see a new file added to you list.
//         } catch (error) {
//           alert("Error sending File to IPFS");
//           console.log(error);
//         }
//       }

//       alert("Successfully Uploaded");
//       setFileName("No image selected");
//       setFile(null); //to again disable the upload button after upload
//     } catch (error) {
//       console.log(error.message); //this mostly occurse when net is not working
//     }
//   };
//   const retrieveFile = (e) => {
//     const data = e.target.files[0];
//     console.log(data);

//     const reader = new window.FileReader();

//     reader.readAsArrayBuffer(data);
//     reader.onloadend = () => {
//       setFile(e.target.files[0]);
//     };
//     setFileName(e.target.files[0].name);
//     e.preventDefault();
//   };
//   return (
//     <div className="top">
//       <form className="form" onSubmit={handleSubmit}>
//         <label htmlFor="file-upload" className="choose">
//           {/*turn around for avoding choose file */}
//           Choose Image
//         </label>
//         <input
//           disabled={!account} //disabling button when metamask account is not connected
//           type="file"
//           id="file-upload"
//           name="data"
//           onChange={retrieveFile}
//         />
//         <span className="textArea">Image: {fileName}</span>
//         {/* choose file */}
//         <button type="submit" disabled={!file} className="upload">
//           Upload file
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FileUpload;