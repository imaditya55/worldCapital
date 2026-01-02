import express from "express";
import pool from "./db.js";

const app = express();
const port = 3000;

let quiz = [];
let totalCorrect = 0;
let currentQuestion = {};

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Load quiz data ONCE
async function loadQuiz() {
  try {
    const result = await pool.query("SELECT * FROM capitals");
    quiz = result.rows;
  } catch (err) {
    console.error("Error executing query", err);
  }
}

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  console.log(currentQuestion);

  res.render("index.ejs", {
    question: currentQuestion,
    totalScore: totalCorrect,
  });
});

// POST submit
app.post("/submit", (req, res) => {
  
  const answer = req.body.answer.trim();
  let isCorrect = false;

  if (
    answer &&
    currentQuestion.capital.toLowerCase() === answer.toLowerCase()
  ) {
    totalCorrect++;
    isCorrect = true;
  }

  nextQuestion();
    console.log(currentQuestion);

  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  currentQuestion = quiz[Math.floor(Math.random() * quiz.length)];
}

app.listen(port, async () => {
  await loadQuiz();
  console.log(`Server running at http://localhost:${port}`);
});
