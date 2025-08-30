import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userEmail = "user@gmail.com"; // Ideally backend se aayega ya context se

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/sign-in");
  };

  // Example resume data, tum API se fetch kar sakti ho
  const resumes = [
    { id: 1, name: "Software Engineer Resume" },
    { id: 2, name: "Product Manager Resume" },
    { id: 3, name: "Data Scientist Resume" },
  ];

  return (
    <div className="dashboard-container">
  

      {/* Main Dashboard */}
      <main className="dashboard-main">
        {/* Topbar */}
        <div className="topbar">
          <span className="user-info">Signed in as: {userEmail}</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <h1>Welcome to your Dashboard</h1>
          <p className="quote">
            "Your future is created by what you do today, not tomorrow."
          </p>

          <button className="new-resume-btn">+ Create New Resume</button>

          <section className="resume-list">
            <h2>Your Resumes</h2>
            <div className="resume-cards">
              {resumes.map((resume) => (
                <div key={resume.id} className="resume-card">
                  <h3>{resume.name}</h3>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
