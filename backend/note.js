// ✅ 1. cors
// Purpose: Enables Cross-Origin Resource Sharing.

// Use: Allows your server to accept requests from different domains (e.g., frontend on a different URL than backend).

// 🔐 2. dotenv
// Purpose: Loads environment variables from a .env file.

// Use: Securely manage keys like DB passwords, API secrets without hardcoding.

// 🚀 3. express
// Purpose: Web framework for Node.js.

// Use: Quickly build REST APIs or web applications with routing and middleware support.

// 🔒 4. jsonwebtoken
// Purpose: Creates and verifies JWT tokens.

// Use: Secure user login/authentication sessions (e.g., login tokens).

// 🧠 5. mongoose
// Purpose: MongoDB object modeling tool.

// Use: Defines schemas and interacts easily with MongoDB databases.

// 📁 6. multer
// Purpose: Handles file uploads in Node.js.

// Use: Upload images, documents, etc., to your server.

// 🛠 7. nodemon
// Purpose: Automatically restarts server on file changes.

// Use: Improves development speed—no need to restart manually.

// 💸 8. razorpay
// Purpose: Integrates Razorpay payment gateway.

// Use: Accept online payments in Indian currency (INR), cards, UPI, etc.

// 💳 9. stripe
// Purpose: Stripe payment gateway SDK.

// Use: Accept global online payments (cards, wallets, etc.).

// ✅ 10. validator
// Purpose: Validates and sanitizes strings.

// Use: Check for valid email, URLs, escape HTML, etc.

// ☁️ 11. cloudinary
// Purpose: Upload and manage media on Cloudinary.

// Use: Host, resize, and deliver optimized images and videos.

// 🔑 12. bcrypt
// Purpose: Hash passwords securely.

// Use: Store passwords safely in the database (e.g., hashed login credentials).


// "type": "module" used import express from 'express';

// Without it (default CommonJS)                     
//const express = require('express');

app.use(express.json())//Allows your server to understand JSON data sent from frontend (like login forms or product info)
app.use(cors()) //Lets your frontend (React/Angular) talk to your backend (here, Express).    

                                   