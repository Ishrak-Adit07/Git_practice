import express from "express";
import { blueApi, testGetApi, untilApi } from "../controllers/api.controller.js";
const router = express.Router();

router.get("/test", testGetApi);
router.get("/blue", blueApi);
router.get("/until", untilApi);

export default router;