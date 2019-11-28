import express from "express";
import users from "./users";
import roles from "./roles";
import invoices from "./invoices";
import trips from "./trips";

const router = express.Router();

router.use(users);
router.use(trips);
router.use(invoices);
router.use(roles);

export default router;
