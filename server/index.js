import  express from "express";
import dotenv from "dotenv";

// Database connection

import ConnectDB from "./database/connection";

dotenv.config();

const Zomato = express();

Zomato.use(express.json());

Zomato.get("/", (req, res) => {
    res.json({
        message: "server is running",
    });
});

const PORT = 3000;

Zomato.listen(PORT, () => {
    ConnectDB()
    .then(() => {
        console.log("Server is running !!!");
   })
    .catch((error) => {
        console.log("server is running, but database connection failed...");
      console.log(error);
    });

    console.log("server is running !!!");
});
