import express from "express";
import tripController from "../../controllers/Trips";

const router = express.Router();
router.get("/trips/active", tripsController.listActiveTrips);
router.post("/trip", tripsController.postTrip);
router.put("/trips/complete", tripController.terminateTrip);

export default router;
