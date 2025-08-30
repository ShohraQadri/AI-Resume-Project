import React, { useEffect, useState } from "react";
import "./SignIn.css";
import aiImage1 from "../../assets/img-ai.jpg";
import aiImage2 from "../../assets/img-ai1.png";
import aiImage3 from "../../assets/img-ai2.png";
import aiImage4 from "../../assets/img-ai3.jpg";
import aiImage5 from "../../assets/img-ai4.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../Services/ApiService";
import { ToastContainer } from "react-toastify";
import "../../Components/Dashboard/Dashboard";

const SignIn = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 5);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const images = [aiImage1, aiImage2, aiImage3, aiImage4, aiImage5];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password }; // direct state use

    loginUser(data)
      .then((res) => {
        console.log("✅ API Response:", res.data);
        localStorage.setItem("isAuthenticated", "true");
        toast.success("Login successful!");
        setTimeout(() => navigate("/dashboard"), 1000);
      })
      .catch((err) => {
        console.error("❌ API Error:", err);
        toast.error(err.response?.data?.message || "Error logging in.");
      });
  };

  // Handle form submission

  return (
    <div className="signin-container">
      {/* Left Side Image with Animation */}
      <div className="signin-image">
        <img
          src={images[currentImage]}
          alt="AI Visual"
          className="animated-img"
        />
      </div>

      {/* Right Side Form */}
      <div className="signin-form">
        <h2>Welcome Back</h2>
        <p>Sign in to continue your AI resume journey</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
