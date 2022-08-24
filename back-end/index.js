import express from "express";
import config from "./config.js";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import bodyParser from "body-parser";

const PORT = config.PORT || 5000;

const app = express();

console.log(process.env.NODE_ENV);
console.log(config.DB_URI);

// Connect to the database
mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to database successful."))
  .catch((err) => console.log(`Error connecting to database! ${err.message}`));

// Set how the app parses data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

// Routes
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});

export { app };
