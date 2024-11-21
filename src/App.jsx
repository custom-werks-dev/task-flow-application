import { Route, Routes } from "react-router-dom";
import Stats from "./components/Stats";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import PersonalContacts from "./pages/PersonalContacts";
import BusinessContacts from "./pages/BusinessContacts";
import { Toaster } from "sonner";
import "./App.css";

function App() {
  return (
    <div className="bg-green font-body text-[14px] md:text-[14px] text-center">
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<PersonalContacts />} />
        {/* <Route
                    path="/business-contacts"
                    element={<BusinessContacts />}
                /> */}
      </Routes>
    </div>
  );
}

export default App;
