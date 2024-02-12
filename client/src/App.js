import { Route, Routes } from "react-router-dom";
import "./App.css";

// STATIC COMPONENTS
import Welcome from "./components/Welcome/Welcome";
import Upload from "./components/Upload/Upload";
import DidComponent from "./components/DidComponent/DidComponent";
import Validate from "./components/Validate/Validate";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import DecentralizedStorage from "./components/DecentralizedStorage/DecentralizedStorage";
import MainLayout from "./components/MainLayout/MainLayout";
import Issuer from "./components/Issuer/Issuer";
import DidSucess from "./components/DidSucess/DidSucess";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/did" element={<DidComponent />} />
        <Route path="/validate" element={<Validate />} />
        <Route path="/IssuerValidate" element={<Issuer />} />
        <Route path="/validateDIDsuccess" element={<DidSucess />} />
        <Route path="/decentralizedStorage" element={<DecentralizedStorage />} />
        <Route path="/login" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
