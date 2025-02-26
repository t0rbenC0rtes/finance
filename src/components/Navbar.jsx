import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChartPie, FaRegCreditCard } from "react-icons/fa";
import { MdHomeFilled, MdOutlineSavings } from "react-icons/md";
import { HiArrowsUpDown } from "react-icons/hi2";

const navItems = [
  { name: "Overview", icon: <MdHomeFilled />, path: "/" },
  { name: "Transactions", icon: <HiArrowsUpDown />, path: "/transactions" },
  { name: "Budgets", icon: <FaChartPie />, path: "/budgets" },
  { name: "Pots", icon: <MdOutlineSavings />, path: "/pots" },
  { name: "Recurring bills", icon: <FaRegCreditCard />, path: "/recurring-bills" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bottom-navbar">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <NavLink key={item.name} to={item.path} className="nav-item">
            {/* Animated Background INSIDE nav-item */}
            <motion.div
              className="nav-bg"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isActive ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            {item.icon}
            <span className="nav-label">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
