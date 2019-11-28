import express from "express";
import Roles from "../../controllers/roles";
import Validation from "../../middlewares/validations/roles";

const router = express.Router();

router.get("/roles", Roles.getAll);
router.get("/roles/:id", Validation.params, Roles.get);
router.put(
	"/roles/:id",
	Validation.params,
	Validation.optionalBody,
	Roles.update
);

export default router;
