import express from "express";
import userController from "../../controllers/Users";

const router = express.Router();
router.get("/users", userController.listUsers);
router.get("/users/:identifier", userController.getUserByIdentifier);
router.get("/users/location/:location", userController.getUserByLocation);

export default router;
