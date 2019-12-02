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
					where: { roles: identifier },
					returning: true
				});
				return res.status(200).json({
					users
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
}

export default Users;
