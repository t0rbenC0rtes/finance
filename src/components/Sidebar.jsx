import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChartPie, FaRegCreditCard } from "react-icons/fa";
import { MdHomeFilled, MdOutlineSavings } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const navItems = [
  { name: "Overview", icon: <MdHomeFilled />, path: "/" },
  { name: "Transactions", icon: <HiArrowsUpDown />, path: "/transactions" },
  { name: "Budgets", icon: <FaChartPie />, path: "/budgets" },
  { name: "Pots", icon: <MdOutlineSavings />, path: "/pots" },
  { name: "Recurring bills", icon: <FaRegCreditCard />, path: "/recurring-bills" },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <motion.div
        className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}
        animate={{ width: isSidebarOpen ? 250 : 80 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="title">{isSidebarOpen ? "finance" : "f"}</h1>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <NavLink key={item.name} to={item.path} className="sidebar-item">
              <motion.div
                className="sidebar-bg"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {item.icon}
              {isSidebarOpen && <span className="sidebar-label">{item.name}</span>}
            </NavLink>
          );
        })}

        {/* 🟢 Minimize Sidebar Button */}
        <button className="toggle-sidebar" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <BiSolidLeftArrow /> : <BiSolidRightArrow />}
        </button>
      </motion.div>
    </div>
  );
};

export default Sidebar;
