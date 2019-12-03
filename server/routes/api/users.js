import express from "express";
import usersController from "../../controllers/Users";

const router = express.Router();
router.get("/users", usersController.listUsers);
router.get("/users/:identifier", usersController.getUserByIdentifier);
router.get("/users/location/:location", usersController.getUserByLocation);
router.get("/users/id/:id", usersController.getUserById);
router.get("/users/riders/:driverId", usersController.getNearByRiders);

export default router;
