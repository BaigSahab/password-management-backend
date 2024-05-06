import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  addPasswords,
  getMyPasswords,
} from "../controllers/passwordsController.js";

router.route("/").post(protect, addPasswords);
router.route("/mypasswords").get(protect, getMyPasswords);

export default router;
