import React, { ReactNode } from "react";
import "../stylesheets/ShellLayout.css";
import logo from "../assets/logo.png";

interface ShellLayoutProps {
  children: ReactNode; // Define the type for children
}

const ShellLayout: React.FC<ShellLayoutProps> = ({ children }) => {
  return (
    <div className="shell-layout">
      {/* Header Section */}
      <header className="header">
        <img src={logo} className="logo" alt="Logo" />
        <h1 className="header-title">Chris Luebbers</h1>
      </header>

      {/* Main Content Section */}
      <main className="main-content">{children}</main>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">
          &copy; This is a page for me to showcase me.
        </p>
        <p>Produced in 2025.</p>
      </footer>
    </div>
  );
};

export default ShellLayout;
