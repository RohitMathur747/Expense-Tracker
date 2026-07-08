const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");

const {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
} = require("../controller/incomeController.js");

const router = express.Router();

router.post("/add", protect, addIncome);
router.post("/get", protect, getAllIncome);
router.get("/downloadexcel", protect, downloadIncomeExcel);
router.delete("/:id", protect, deleteIncome);

module.exports = router;
