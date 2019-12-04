import express from "express";
import invoicesController from "../../controllers/Invoices";

const router = express.Router();
router.get("/invoices", invoicesController.listAllInvoices);
router.get("/invoices/:id", invoicesController.getInvoice);
router.put("/invoices/:id/:status", invoicesController.payInvoice);

export default router;

