import express from "express";
import cors from "cors";
import connectDB from "./config/db";

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT} go and catch it`);
});

export default app;
