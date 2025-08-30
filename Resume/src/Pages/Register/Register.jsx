import React, { useEffect, useState } from "react";
import "./Register.css";
import aiImage1 from "../../assets/img-ai.jpg";
import aiImage2 from "../../assets/img-ai1.png";
import aiImage3 from "../../assets/img-ai2.png";
import aiImage4 from "../../assets/img-ai3.jpg";
import aiImage5 from "../../assets/img-ai4.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { registerUser } from "../../Services/ApiService";

const Register = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [aiImage1, aiImage2, aiImage3, aiImage4, aiImage5];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Automatically change image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Redirect to dashboard if already authenticated
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, password, confirmPassword };

    registerUser(data)
      .then((res) => {
        console.log("✅ API Response:", res.data);
        localStorage.setItem("isAuthenticated", "true");
        toast.success("User registered successfully!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        console.error("❌ API Error:", err);
        toast.error("Error registering user.");
      });
  };

  return (
    <div className="signin-container">
      <div className="signin-image">
        <img
          src={images[currentImage]}
          alt="AI Visual"
          className="animated-img"
        />
      </div>

      <div className="signin-form">
        <h2>Create Account</h2>
        <p>Register to start your AI resume journey</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>

        <p className="signup-link">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
