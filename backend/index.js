const app = require("express");

app.use("cors()");
app.use("express.json()");
app.get("/", (req, res) => {
    res.text("Hello World")
})

app.listen(3000);