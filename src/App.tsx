import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./stylesheets/App.css";
import ShellLayout from "./frontend/ShellLayout";
import Book from "./frontend/Book";
import { useState, useEffect } from "react";

function App() {
  // Persistent states for thumbs-up and thumbs-down
  const [likes, setLikes] = useState(
    () => Number(localStorage.getItem("likes")) || 0
  );
  const [dislikes, setDislikes] = useState(
    () => Number(localStorage.getItem("dislikes")) || 0
  );

  useEffect(() => {
    localStorage.setItem("likes", likes.toString());
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("dislikes", dislikes.toString());
  }, [dislikes]);

  return (
    <Router>
      <Routes>
        {/* Home Page wrapped inside ShellLayout */}
        <Route
          path="/"
          element={
            <ShellLayout>
              <div className="card">
                <h3>Do you like my logo?</h3>
                <div>
                  <button onClick={() => setLikes(likes + 1)}>
                    <i className="fas fa-thumbs-up"></i> Thumbs Up ({likes})
                  </button>
                  <button onClick={() => setDislikes(dislikes + 1)}>
                    <i className="fas fa-thumbs-down"></i> Thumbs Down (
                    {dislikes})
                  </button>
                </div>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="https://github.com/cluebbers50" target="_blank">
                      <i className="fas fa-laptop-code"></i> Coding Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://delmarmortgage.com/loan-officer/chris-luebbers/"
                      target="_blank"
                    >
                      <i className="fas fa-home"></i> Mortgages
                    </a>
                  </li>
                  <li>
                    <Link to="/books">
                      <i className="fas fa-book"></i> Books
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.forbes.com/business/" target="_blank">
                      <i className="fas fa-briefcase"></i> Businesses
                    </a>
                  </li>
                </ul>
              </div>
            </ShellLayout>
          }
        />

        {/* Books Page wrapped inside ShellLayout */}
        <Route
          path="/books"
          element={
            <ShellLayout>
              <Book />
            </ShellLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
