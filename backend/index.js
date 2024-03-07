const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3000,()=>{`Server Running at port 3000`});