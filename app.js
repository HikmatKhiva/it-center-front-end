import express from "express";
import cors from "cors";
import { V1Routes } from "./v1/index.routes.js";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";

import { rateLimiterMiddleware } from "./middleware/rateLimiter.js";
import { findCertificate } from "./v1/certificates/certificates.controller.js";
const __dirname = path.resolve()
const app = express();
const PORT = process.env?.PORT || 5000;
// middlewares
// Use the rate limiter middleware
app.use(rateLimiterMiddleware);
app.use(morgan('combined'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// routes
app.use("/api/v1", V1Routes);
app.get("/certificate",findCertificate)
// production preview ui
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
export default app