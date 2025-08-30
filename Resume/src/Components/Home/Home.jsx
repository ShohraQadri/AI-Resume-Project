import React from "react";
import "./Home.css";
import dummy from "../../assets/dummy.webp";
import { FaMagic, FaFileAlt, FaDownload, FaEye, FaUserEdit, FaPalette, FaBrain  } from "react-icons/fa";


const Home = () => {
  return (
    <div className="home-container">
      {/* hero img */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Build Your Perfect <span>Resume</span>
          </h1>
          <p>Get job-winning resumes with the power of AI</p>
          <p className="quote">
            “Your resume is your first impression — make it unforgettable.”
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={dummy} alt="Resume Illustration" />
        </div>
      </section>

      {/* features section */}
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">
              <FaMagic />
            </span>
            <h3>Smart AI Suggestions</h3>
            <p>
              Let AI enhance your resume with tailored content & skill
              suggestions.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">
              <FaFileAlt />
            </span>
            <h3>Stunning Templates</h3>
            <p>
              Pick from elegant, recruiter-friendly templates for any role or
              industry.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">
              <FaDownload />
            </span>
            <h3>1-Click Export</h3>
            <p>
              Download your polished resume instantly in high-quality PDF
              format.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">
              <FaEye />
            </span>
            <h3>Real-time Preview</h3>
            <p>
              See live changes in your resume as you edit and customize it
              effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* how is it work */}

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <span className="icon">
              <FaUserEdit />
            </span>
            <h4>Step 1</h4>
            <p>Enter your personal and professional details with ease.</p>
          </div>
          <div className="step-card">
            <span className="icon">
              <FaPalette />
            </span>
            <h4>Step 2</h4>
            <p>Select a resume template that suits your career style.</p>
          </div>
          <div className="step-card">
            <span className="icon">
              <FaBrain />
            </span>
            <h4>Step 3</h4>
            <p>Use AI to automatically enhance content and layout.</p>
          </div>
          <div className="step-card">
            <span className="icon">
              <FaDownload />
            </span>
            <h4>Step 4</h4>
            <p>Preview, download, and start applying for your dream job.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
