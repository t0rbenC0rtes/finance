import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

const Page = ({ title }) => (
  <motion.div
    className="page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h1>{title}</h1>
  </motion.div>
);

const AnimatedRoutes = ({ isSidebarOpen }) => {
  const location = useLocation();

  return (
    <motion.div
      className="page-content"
      animate={{ marginLeft: isSidebarOpen ? 250 : 80 }} // ✅ Adjusts dynamically
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Page title="Overview" />} />
          <Route path="/transactions" element={<Page title="Transactions" />} />
          <Route path="/budgets" element={<Page title="Budgets" />} />
          <Route path="/pots" element={<Page title="Pots" />} />
          <Route path="/recurring-bills" element={<Page title="Recurring Bills" />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  );
};

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1440);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1440);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {isDesktop ? (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      ) : (
        <Navbar />
      )}
      <AnimatedRoutes isSidebarOpen={isDesktop ? isSidebarOpen : false} />
    </Router>
  );
};

export default App;
