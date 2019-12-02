import express from "express";
import users from "./users";
// import invoices from "./invoices";
// import trips from "./trips";

const router = express.Router();

router.use(users);
// router.use(trips);
// router.use(invoices);

export default router;
