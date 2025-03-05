import express, { Router } from "express";
import { create, getAll } from "../controllers/review.controller";
import { Authenticate } from "../middlewares/authentication.middleware";
import { onlyAdmin, onlyUser } from "../@types/global.types";

const router: Router = express.Router();

// create review
router.post("/", Authenticate(onlyUser), create);

// get all reviews
router.get("/", Authenticate(onlyAdmin), getAll);

export default router;
