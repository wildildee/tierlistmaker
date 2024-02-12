import express from "express";
import path from "path";
import cors from "cors";
import "./loadenv.mjs";
import "express-async-errors";
import tierlist from "./routes/tierlist.mjs";
import morgan from "morgan";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Load the api routes
app.use("/api/tierlist", tierlist);

// Serve the react page
app.use(express.static("../client/build"));

app.get('/', function (req, res) {
  res.sendFile("../client/build/index.html");
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});