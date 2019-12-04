import dotenv from "dotenv";
import { Invoice } from "../models/index";

dotenv.config();

/**
 * The class handle everything about the invoice
 */
class Invoices {
	/**
	 *
	 *
	 * @static
	 * @param {*} res
	 * @returns {object} response
	 * @memberof Invoice
	 */
	static async listAllInvoices(req, res) {
		try {
			const result = await Invoice.findAll();
			return res.status(200).json({
				status: 200,
				trips: result
			});
		} catch (error) {
			return error;
		}
	}
	/**
	 *
	 *
	 * @static
	 * @param {*} req
	 * @param {*} res
	 * @returns {object} response
	 * @memberof Invoice
	 */
	static async getInvoice(req, res) {
		const { id } = req.params;
		try {
			const invoice = await Invoice.findOne({
				where: {
					id
				}
			});
			return res.status(200).json({
				status: 200,
				invoice
			});
		} catch (error) {
			return error;
		}
	}
	/**
	 *
	 *
	 * @static
	 * @param {*} req
	 * @param {*} res
	 * @returns {object} response
	 * @memberof Invoice
	 */
	static async listPaidInvoices(req, res) {
		const { status } = req.params;
		try {
			const invoices = await Invoice.findAll({
				where: {
					paid: status
				}
			});
			return res.status(200).json({
				status: 200,
				invoices
			});
		} catch (error) {
			return error;
		}
	}

	/**
	 *
	 *
	 * @static
	 * @param {string} req
	 * @param {string} res
	 * @returns {object} response
	 * @memberof Trips
	 */
	static async payInvoice(req, res) {
		const { id } = req.params;
		try {
			let foundInvoice = await Invoice.findOne({
				where: { id },
				returning: true
			});
			if (foundInvoice.paid == true) {
				return res.status(404).json({
					message: "The invoice is already paid"
				});
			} else {
				const invoice = await Invoice.update(
					{ paid: true },
					{
						where: { id },
						returning: true
					}
				);
				return res.status(200).json({
					updatedTrip: invoice
				});
			}
		} catch (error) {
			return error;
		}
	}
}

export default Invoices;
