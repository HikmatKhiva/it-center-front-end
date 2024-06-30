import express from "express";
import cors from "cors";
import { connectDatabase } from "./db/db.js";
import { controlRoute } from "./routes/index.js";
const app = express();
const PORT = process.env?.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api", controlRoute);

// connect to database
connectDatabase();

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
