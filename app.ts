import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Working");
})


app.listen(5252, () => {
console.log("Server started")
})


