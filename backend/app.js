import express from "express";
import { controlRoute } from "./routes/index.js";
const app = express();
const PORT = process.env?.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/api", controlRoute);

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
