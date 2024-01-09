import { application, Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";

const router = Router();

//Register
// http://localhost:5001/api/auth/register

router.post("/register", register);

//Login
// http://localhost:5001/api/auth/login
router.post("/login", login);

//Get me
// http://localhost:5001/api/auth/me
router.get("/me", getMe);

export default router;
