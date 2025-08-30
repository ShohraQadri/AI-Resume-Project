require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Employee = require('./Modules/Emplyee');

const PORT = process.env.PORT || 7000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use((req, res, next) => {
    console.log('Request URL:', req.url);
    next();
});

// Test endpoint
app.post('/test', async (req, res) => {
  const { name } = req.body;
    try {   
        console.log("name:", process.env.MONGO_URI);
        res.status(201).json({ message: 'Employee registered successfully', name });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Register endpoint
app.post('/register', async (req, res) => {
  Employee.create(req.body)
    .then(employee => {
      console.log("Employee created:", employee);
      res.status(201).json({ message: 'Employee registered successfully', employee });
    })
    .catch(err => {
      console.error("Error creating employee:", err);
      res.status(400).json({ error: err.message });
    });
});

// Login endpoint
// LOGIN API
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Find user by email
    const user = await Employee.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Step 2: Compare password
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Step 3: Login successful
    res.status(200).json({
      message: "Login successful",
      user
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// Login endpoint
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
