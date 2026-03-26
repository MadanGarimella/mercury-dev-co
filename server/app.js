import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mercurydevco.vercel.app/"
  ]
}));
app.use(express.json());

app.use("/api", contactRoutes);

export default app;