import dotenv from "dotenv";
import { User } from "../models/index";

dotenv.config();

/**
 * The class handle everything about the user
 */
class Users {
	/**
	 *
	 *
	 * @static
	 * @param {*} req
	 * @param {*} res
	 * @returns {object} response
	 * @memberof Users
	 */
	static async listUsers(req, res) {
		try {
			const result = await User.findAll({
				attributes: {
					exclude: ["createdAt", "updatedAt"]
				}
			});
			return res.status(200).json({
				status: 200,
				users: result
			});
		} catch (error) {
			return error;
		}
	}

	/**
	 *
	 *
	 * @static
	 * @param {string} username
	 * @param {string} res
	 * @returns {object} response
	 * @memberof Users
	 */
	static async getUserByIdentifier(req, res) {
		const { identifier } = req.params;
		try {
			if (identifier === "driver" || identifier === "rider") {
				const users = await User.findAll({
					where: { role: identifier },
					returning: true
				});
				return res.status(200).json({
					users
				});
			} else if (identifier === "available") {
				const drivers = await User.findAll({
					where: { isAvailable: true },
					returning: true
				});
				return res.status(200).json({
					availableDrivers: drivers
				});
			} else {
				const user = await User.findOne({
					where: { username: identifier },
					returning: true
				});
				return res.status(200).json({
					user
				});
			}
		} catch (error) {
			return error;
		}
	}
	static async getUserByLocation(req, res) {
		const { location } = req.params;
		try {
			const users_in_3Km = await User.findAll({
				where: {
					role: "driver",
					distance: 3,
					location,
					isAvailable: true
				},
				returning: true
			});
			return res.status(200).json({
				users_in_3Km
			});
		} catch (error) {
			return error;
		}
	}
	static async getUserById(req, res) {
		const { id } = req.params;

		try {
			const user = await User.findOne({
				where: {
					id
				},
				returning: true
			});
			return res.status(200).json({
				user
			});
		} catch (error) {
			return error;
		}
	}
	static async getNearByRiders(req, res) {
		const { driverId } = req.params;
		try {
			const driver = await User.findOne({
				where: {
					role: "driver",
					id: driverId,
					isAvailable: true
				},
				returning: true
			});
			const riders = await User.findAll({
				where: {
					role: "rider",
					distance: 3,
					location: driver.location,
					isAvailable: true
				},
				limit: 2,
				returning: true
			});
			return res.status(200).json({
				riders
			});
		} catch (error) {
			return error;
		}
	}
}

export default Users;
