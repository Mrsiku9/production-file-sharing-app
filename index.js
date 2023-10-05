import express from "express";
import Route from "./routes/route.js";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./database/db.js";
import path from "path"
const __dirname = path.resolve()

const app = express();
const port = process.env.PORT ||8000;
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.use(cors());
app.use("/", Route);

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

ConnectDB(username,password);
// ConnectDB();

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
