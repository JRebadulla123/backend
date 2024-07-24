import express from "express";

const app = express();
const port = 3000;

function getDayMessage() {
    const d = new Date("July 29, 2024 01:15:00");
    const day = d.getDay();
    return day === 0 || day === 6 ? "weekend" : "weekday";
}

function getAdvice(dayType) {
    return dayType === "weekday" ? "it's time to work hard!" : "it's time to have fun!";
}

app.use((req, res, next) => {
    req.dayType = getDayMessage();
    req.advice = getAdvice(req.dayType);
    next();
});

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: req.dayType,
    advice: req.advice
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
