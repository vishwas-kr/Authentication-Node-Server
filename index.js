const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routers/auth");

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(authRouter);

const DB = "ENTER YOUR MONGODB URL";

mongoose.set('strictQuery', true);
mongoose.connect(DB).then(() => { console.log("Connection Successful") }).catch((e) => { console.log(e) });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected to port ${PORT}`);
})