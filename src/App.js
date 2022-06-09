import logo from "./logo.svg";
import "./App.css";
import AppSidebar from "./layout/AppSidebar";
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";
import AppFooter from "./layout/AppFooter";
import { useState } from "react";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <>
      <AppSidebar toggleSidebar={toggleSidebar} />

      <div className="main-wrapper d-flex flex-column">
        <AppHeader handleSidebarToggle={handleSidebarToggle} />
        <AppContent />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
