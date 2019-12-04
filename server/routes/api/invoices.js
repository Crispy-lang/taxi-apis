import express from "express";
import invoicesController from "../../controllers/Invoices";

const router = express.Router();
router.get("/invoices", invoicesController.listAllInvoices);
router.get("/invoices/:id", invoicesController.getInvoice);
router.get("/invoices/paid/:status", invoicesController.listPaidInvoices);
router.put("/invoices/pay/:id", invoicesController.payInvoice);

export default router;
