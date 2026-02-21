const express = require("express");
const router = express.Router();

const { createQuiz, getQuizzes, deleteQuiz } = require("../controllers/quizController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { getQuizById } = require("../controllers/quizController");
// Only admin can create quiz
router.post("/", protect,adminOnly ,createQuiz);

// Any logged in user can view quizzes
router.get("/", protect, getQuizzes);
router.get("/:id", protect, getQuizById); //✅ Get quiz by ID (optional)
router.delete("/:id", protect, adminOnly, deleteQuiz);

module.exports = router;