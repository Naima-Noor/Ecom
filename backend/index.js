import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import registrationRoutes from "./routes/registrationRoutes.js";

const app = express();
const connectionURL = "mongodb+srv://Naima019:Naima_019@cluster0.zyy6urk.mongodb.net/?retryWrites=true&w=majority"; // Provide the correct database name here
const port = process.env.PORT || 5001;

mongoose
  .connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', registrationRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});