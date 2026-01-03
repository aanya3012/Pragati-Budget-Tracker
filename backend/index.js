const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Path to our 2025 budget data
const dataFilePath = path.join(__dirname, "budget2025.json");

// API: get tax revenue
app.get("/api/taxes", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    res.json(data.taxRevenue);
});

// API: get expenditure
app.get("/api/expenditure", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    res.json(data.expenditure);
});

// API: get gov official notes
app.get("/api/notes", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    res.json(data.govOfficialNotes);
});

// API: add a gov official note
app.post("/api/notes", (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
    const newNote = req.body; // { title, state, description }
    data.govOfficialNotes.push(newNote);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.json({ message: "Note added successfully" });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
