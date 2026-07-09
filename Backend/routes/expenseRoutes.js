const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");

const {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
} = require("../controller/expenseController.js");

const router = express.Router();

router.post("/add", protect, addExpense);
router.post("/get", protect, getAllExpense);
router.get("/downloadexcel", protect, downloadExpenseExcel);
router.delete("/:id", protect, deleteExpense);

module.exports = router;
