import { Outlet } from "react-router-dom";
import SideBar from "../layout/SideBar";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import DashBar from "../components/dashBar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex bg-background overflow-hidden">
      {/* Bouton mobile */}
      <button
        className="lg:hidden p-2 rounded-md border bg-background text-foreground shadow-sm z-50 fixed top-2 left-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          lg:static z-40 top-0 left-0 bg-background transition-transform
          transform lg:w-64
          ${isOpen ? "translate-x-0 w-64 " : "-translate-x-full   "} 
          lg:translate-x-0
          h-full
        `}
      >
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Contenu principal qui scroll */}
      <div className="flex-1 overflow-y-auto  h-full scrollbar-thin scrollbar-thumb-muted">
        <DashBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
