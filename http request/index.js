import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello</>");
});

app.get("/register", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("<h1>Contact</>");
    res.sendStatus(201);
});

app.post("/user/jellian", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("<h1>About</>");
    res.sendStatus(200);
});

app.put("/user/jellian", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("<h1>About</>");
    res.sendStatus(200);
});

app.patch("/user/jellian", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("<h1>About</>");
    res.sendStatus(200);
});

app.delete("/user/jellian", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("<h1>About</>");
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});