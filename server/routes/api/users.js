import express from "express";
import userController from "../../controllers/users";
import validate from "../../middlewares/validations";
import schema from "../../middlewares/validations/users.schema";

const router = express.Router();
router.get("/users", userController.listUsers);
router.put("/user/:username", userController.update);
router.get("/users/:username", userController.getUserInfo);

export default router;
