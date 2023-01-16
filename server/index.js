import { sequelize } from "./sequelize.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRoutes } from "./routes/usersRoute.js";
import { Activity } from "./models/activity.js";
import {User} from "./models/user.js";



const app = express();
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", userRoutes);

let serverPort = 5001;
app.listen(serverPort, async () => {
  try {
    sequelize.authenticate();
    console.log(`Server is running on port ${serverPort}`);
  } catch (error) {
    console.log("Unable to connect to the database ", error);
  }
});