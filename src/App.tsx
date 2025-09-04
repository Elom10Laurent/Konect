import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./layouts/Dashboard";
import ValidationProcess from "./pages/kycProcess";
import FAQ from "./pages/dashboard/faqs";
import Curriculum from "./pages/dashboard/curriculum";
import Index from "./pages";
import Contact from "./pages/dashboard/link";
import ToolsPage from "./pages/dashboard/tools";
import UploadCV from "./pages/dashboard/cv-form";
import Profile from "./pages/dashboard/Profile";
import CardInfos from "./pages/dashboard/card-info";
import HomeDash from "./pages/dashboard/card-detail";
import Analytics from "./pages/dashboard/Home";
import SupportPage from "./pages/supportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/support" element={<SupportPage />} />
        {/* dashboard outlet module type  */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Outlet s’affiche ici */}
          <Route index element={<HomeDash />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="card" element={<CardInfos />} />
          <Route path="my-links" element={<Contact />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="kyc-process" element={<ValidationProcess />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="upload-cv" element={<UploadCV />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
