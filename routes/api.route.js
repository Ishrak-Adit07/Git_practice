import express from "express";
import { blueApi, testGetApi } from "../controllers/api.controller.js";
const router = express.Router();

router.get("/test", testGetApi);
router.get("/blue", blueApi);

export default router;