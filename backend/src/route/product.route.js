import express from "express";
import { costDetails, prodload, productDtails } from "../controllers/product.controllers.js";




const router = express.Router();

router.post("/productdetails",productDtails);

router.post("/costDetails",costDetails);

// router.post("/prodload",prodload);

export default router;