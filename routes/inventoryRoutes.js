const express = require("express");

const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddelware, getInventoryController);

// // //GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddelware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddelware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars", authMiddelware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddelware, getHospitalController);

// // //GET orgnaisation RECORDS
router.get("/get-orgnaisation", authMiddelware, getOrgnaisationController);

//GET orgnaisation RECORDS
router.get(
  "/get-orgnaisation-for-hospital",
  authMiddelware,
  getOrgnaisationForHospitalController
);

module.exports = router;