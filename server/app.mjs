import express from "express";
import path from "path";
import cors from "cors";
import "./loadenv.mjs";
import "express-async-errors";
import tierlist from "./routes/tierlist.mjs";
import user from "./routes/user.mjs";
import morgan from "morgan";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Serve the react page
app.use(express.static(path.join(__dirname, "../client/build")));

// Load the api routes
app.use("/api/tierlist", tierlist);
app.use("/api/user", user);

app.get('*', function (req, res) {
  console.log();
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});