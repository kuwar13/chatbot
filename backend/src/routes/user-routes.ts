import { Router } from "express";

import {
    getAllUsers,
    userSignin,
    userSignout,
    userSignup,
    verifyUser
    
  } from "../controllers/user-controller.js";
import { signinValidator, signupValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token.js";
const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator),userSignup);
userRoutes.post("/signin", validate(signinValidator), userSignin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/signout", verifyToken, userSignout);
export default userRoutes;