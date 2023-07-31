import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import "./helper/db";
import userRoutes from "./routes/User";
import watchlistRoutes from "./routes/Watchlist";
import ErrorHandler from "./middleware/errorHandler";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://flixtrzzz.netlify.app",
      "https://flixtrzzz.netlify.com",
      "https://flixtr.netlify.app",
      "https://flixtr.netlify.com",
      "https://flixtr-fe.vercel.app",
      "https://flixtr-fe.vercel.com",
      "http://localhost:3001",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

// Routes
app.use("/auth", userRoutes);
app.use("/watchlist", watchlistRoutes);

// Server home route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello fellow developer." });
});

// Server ping route
app.get("/ping", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "pong" });
});

// 404 route handler
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler middleware
app.use(ErrorHandler);

// Start server
app.listen(PORT, () => {
  console.log("Running node server on port: " + PORT);
});
