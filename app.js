import express from "express";
import cors from "cors";
import { controlRoute } from "./routes/index.js";
const app = express();
const PORT = process.env?.PORT || 5000;
import path from "path";
import fs from "fs";
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/", controlRoute);
app.get("/download", (req, res) => {
  const __dirname = path.resolve();
  const tempZipPath = path.join(__dirname, "temp", "100-100.zip");
  const fileBuffer = fs.readFileSync(tempZipPath);

  res.set("Content-Disposition", `attachment; filename="output.zip"`);
  res.set("Content-Type", "application/zip");
  res.set("Content-Length", fileBuffer.length);

  res.send(fileBuffer);
  fs.unlinkSync(tempZipPath);
  // zipFolder(path.join(__dirname, "static", "100-100"), "100-100.zip");
});

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
