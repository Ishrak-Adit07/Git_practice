import express from "express";
import { testGetApi } from "../controllers/api.controller.js";
const router = express.Router();

router.get("/test", testGetApi);

export default router;