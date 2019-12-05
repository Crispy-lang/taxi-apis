import express from "express";
import api from "./api";

const router = express.Router();

// convert the json doc into a styled UI and serve it
router.use("/api", api);

export default router;
