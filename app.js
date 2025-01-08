import express from "express";
const app = express();

// For parsing json
app.use(express.json());

// For cors
// import cors from 'cors';
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }));

//Importing the routes
import apiRoute from "./routes/api.route.js";
app.use("/api", apiRoute);

//Default URL
app.use("/", (req, res) => {
  res.send("Invalid URL!");
});

export default app;