import {
  Home,
 
  BarChart2,
  Lightbulb,
  Crown,
  Link2,
  User,
} from "lucide-react";
import ThemeToggle from "../components/ui/theme-Toggle";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const location = useLocation();

  const menuItems = [
    { label: "Home", icon: Home, link: "/dashboard" },
    { label: "My Links", icon: Link2, link: "/dashboard/my-links" },
    { label: "Tools", icon: Lightbulb, link: "/dashboard/tools" },
    // { label: "Contacts", icon: Users, link: "/dashboard/contacts" },
    // { label: "Team", icon: User, link: "/dashboard/team" },
    { label: "Analytics", icon: BarChart2, link: "/dashboard/analytics" },
    { label: "Curriculum", icon: User, link: "/dashboard/curriculum" },
    // { label: "Tips & Tricks", icon: Lightbulb, link: "/dashboard/tips" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 max-h-screen bg-background dark:bg-card shadow-md flex flex-col justify-between
     p-4 transition-transform duration-300 z-50 w-64 border-r h-full
     ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Top: Logo */}
        <div>
          <div className="flex items-center">

            <Link to={"/"} className="text-4xl font-bold mb-6 text-primary flex-1 text-center pointer-cursor " >
             <h1 >
              Konect
            </h1>
            </Link>
           
          </div>

          {/* Menu */}
          <nav className="space-y-2 overflow-y-auto max-h-[70vh] pr-1">
            {menuItems.map(({ label, icon: Icon, link }) => {
              const isActive = location.pathname === link;
              return (
                <Link key={label} to={link}>
                  <button
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg w-full text-left transition-all
            ${isActive
                        ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                        : "hover:bg-muted dark:hover:bg-muted/50"
                      }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-medium">{label}</span>
                  </button>
                </Link>
              );
            })}
          </nav>

        </div>


        <div className="flex flex-col space-y-4">
          {/* Upgrade card */}
          <div className="mt-6 border rounded-xl p-4 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5 text-primary" />
              <span className="font-semibold">Upgrade to PRO</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Get 0% fees, custom domains, unlimited emails, AI tools & more!
            </p>
            <button className="w-full text-sm font-semibold py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition">
              Upgrade now
            </button>
          </div>


          {/* Profile */}
          <div className="flex items-center justify-between gap-3 border-t pt-4">
            <Link to={"profile"} className="flex items-center gap-3  cursor-pointer">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <p className="font-semibold text-foreground">Doc Holiday</p>
                <p className="text-xs text-muted-foreground">doc@vlce.com</p>
              </div>
            </Link>
            <ThemeToggle />
          </div>

        </div>

      </aside>
    </>
  );
}
