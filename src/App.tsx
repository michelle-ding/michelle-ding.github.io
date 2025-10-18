import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import PortfolioLayout from "./PortfolioLayout";
import Research from "./Research";
import Projects from "./Projects";
import Talks from "./Talks";
import Press from "./Press";
import Website from "./Website";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Keyboard accessibility for links
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setMenuOpen((prev) => !prev);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="portfolio-layout">
        {/* --- MOBILE MENU --- */}
        <div className="mobile-menu">
          <button
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobileMenuList"
            onClick={() => setMenuOpen((prev) => !prev)}
            onKeyDown={handleKeyPress}
          >
            Menu
          </button>

          {menuOpen && (
            <nav
              id="mobileMenuList"
              className="mobile-dropdown"
              aria-label="Mobile Navigation"
            >
              <NavLink to="/" end onClick={closeMenu}>About</NavLink>
              <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
              <NavLink to="/research" onClick={closeMenu}>Research</NavLink>
              <NavLink to="/talks" onClick={closeMenu}>Talks</NavLink>
              <NavLink to="/press" onClick={closeMenu}>Press</NavLink>
              <NavLink to="/websitedetails" onClick={closeMenu}>Website Details</NavLink>
            </nav>
          )}
        </div>

        {/* --- PAGE ROUTES --- */}
        <Routes>
          <Route path="/" element={<PortfolioLayout />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/talks" element={<Talks />} />
          <Route path="/press" element={<Press />} />
          <Route path="/websitedetails" element={<Website />} />
        </Routes>

        {/* --- DESKTOP FOOTER NAVIGATION --- */}
        <footer className="portfolio-footer" role="contentinfo">
          <nav className="footer-nav desktop-nav" aria-label="Footer Navigation">
            <NavLink to="/" end>About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/research">Research</NavLink>
            <NavLink to="/talks">Talks</NavLink>
            <NavLink to="/press">Press</NavLink>
            <NavLink to="/websitedetails">Website Details</NavLink>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
