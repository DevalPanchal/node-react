const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
);

const PORT = process.env.PORT || 5000;

app.get("/home", (req, res) => {
    res.json({ "message": "Hello World" });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));