const express = require("express");
const { connectDB } = require("./dbConfig");
const { noteRouter } = require("./routes/note.routes");
const { userRouter } = require("./routes/user.routes");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

// ✅ Enable CORS
app.use(cors({
    origin: "https://your-frontend.vercel.app",  // Change to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json());
app.get("/", (req,res)=> {
    res.json("Hello riya miss");
});

app.use("/users", userRouter);
app.use("/notes", noteRouter);

// ✅ Connect to database
connectDB().then(() => console.log("Database connected")).catch(err => console.error("DB connection error:", err));

// ✅ Export for Vercel (Fixes crashes)
module.exports = app;
module.exports.handler = serverless(app);v
