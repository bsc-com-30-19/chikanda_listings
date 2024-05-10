const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/adduser", (req,res) =>{
    console.logs(req.body);
    res.send("Response recieved")
})

app.listen(4000,() => console.log("Listening on port 4000"));
