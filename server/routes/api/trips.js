import express from "express";
import tripsController from "../../controllers/Trips";

const router = express.Router();
router.get("/trips/:status", tripsController.listTripsByStatus);
router.post("/trips", tripsController.createTrip);
router.put("/trips/:id/:status", tripsController.terminateTrip);

export default router;
