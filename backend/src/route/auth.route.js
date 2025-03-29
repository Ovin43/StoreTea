import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controllers.js";

const router =express.Router();


router.post("/signup",signup);

router.post("/logout",logout);

router.post("/login",login);

router.post("/updatePro",updateProfile);

router.get("/checkAuth",checkAuth);

export default router;