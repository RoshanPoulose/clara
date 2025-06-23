📘 server.js – Quick Notes
🔹 Imports
express: Creates server and routes.

cors: Allows frontend (React) to talk to backend (Express).

dotenv/config: Loads environment variables from .env.

🔹 Config Files
connectDB(): Connects to MongoDB database.

connectCloudinary(): Sets up Cloudinary for image uploads.

🔹 App Setup
express() → Initializes app.

PORT → Comes from .env or defaults to 4000.

🔹 Middleware
express.json() → Parses incoming JSON in requests.

cors() → Enables cross-origin requests from frontend.

🔹 Routes
/api/user → goes to userRoute.js

/api/product → goes to productRoute.js

🔹 Default Route
/ → Returns "API Working" when visited in browser.

🔹 Start Server
app.listen(port) → Starts listening for API requests.

🧠 Memory Tip:
I.N.I.T.R.S.S

Imports

Network Config (DB + Cloudinary)

Init Express

Tools (Middlewares)

Routes

Status Route (/)

Start Server  


mongoose 

Deep Explanation (in Simple English)
1. import mongoose from "mongoose"
Brings in Mongoose, a library that helps talk to MongoDB easily.

Like a smart assistant to control the database.

2. const connectDB = async () => { ... }
Creates a function called connectDB.

This function connects the app to the MongoDB database.

async is used because the database connection takes time, so it uses await.

3. mongoose.connection.on("connected", () => { ... })
Listens to Mongoose’s built-in "connected" event.

When MongoDB is successfully connected, it runs the function inside:

js
Copy
Edit
console.log("DB connected");
4. await mongoose.connect(...)
Actually connects to MongoDB.

Uses process.env.MONGODB_URI from .env file.

Adds /e-commerce to choose (or create) a database named e-commerce.

5. export default connectDB
Makes the connectDB function available to be used in other files like server.js.

When server.js runs:

It calls connectCloudinary()

Cloudinary is now linked to your account

Now you can upload images in other files (like productController.js)

export default productRouter                                                                   
