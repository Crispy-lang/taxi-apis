import "dotenv/config";
import { User, UserLocation } from "../models/index";
import getDistanceInKM from "../helpers/getDistanceInKM";

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
					exclude: ["createdAt", "updatedAt", "distance"]
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
		const {
			distance,
			longitude: myLongitude,
			latitude: myLatitude
		} = req.query;
		const { identifier } = req.params;
		try {
			if (identifier === "driver" || identifier === "rider") {
				const users = await User.findAll({
					where: { role: identifier },
					returning: true,
					include: [
						{
							model: UserLocation,
							attributes: ["id", "latitude", "longitude"]
						}
					]
				});
				const filterUsers =
					myLongitude && myLatitude
						? users.filter(user => {
								const { latitude, longitude } = user.UserLocation
									? user.UserLocation.get()
									: {};
								const dist = getDistanceInKM(
									myLatitude,
									myLongitude,
									latitude,
									longitude
								);
								if (Math.floor(dist) <= (distance || 3)) {
									return true;
								}
								return false;
						  })
						: users;
				return res.status(200).json({
					users: filterUsers
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
			return error.message;
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
	static async getNearByUsers(req, res) {
		const { driverId } = req.params;
		const {
			distance,
			longitude: myLongitude,
			latitude: myLatitude
		} = req.query;
		try {
			const driver = await User.findOne({
				where: {
					role: "driver",
					id: driverId,
					isAvailable: true
				},
				include: {
					model: UserLocation,
					attributes: ["id", "latitude", "longitude"]
				},
				returning: true
			});
			const riders = await User.findAll({
				where: {
					role: "rider",
					location: driver.location,
					isAvailable: true
				},
				include: {
					model: UserLocation,
					attributes: ["id", "latitude", "longitude"]
				},
				exclude: ["createdAt", "updatedAt"]
			});
			const filterRiders =
				myLongitude && myLatitude
					? riders.filter(rider => {
							const { latitude, longitude } = rider.UserLocation
								? rider.UserLocation.get()
								: {};
							const dist = getDistanceInKM(
								myLatitude,
								myLongitude,
								latitude,
								longitude
							);
							if (Math.floor(dist) <= (distance || 3)) {
								return true;
							}
							return false;
					  })
					: riders;
			const sortedRiders = filterRiders.sort((rider1, rider2) => {
				const dist = getDistanceInKM(
					myLatitude,
					myLongitude,
					UserLocation.latitude,
					UserLocation.longitude
				);
				return dist.valueOf() > rider2.dist.valueOf();
			});
			return res.status(200).json({
				drivername: driver.username,
				sortedRiders
			});
		} catch (error) {
			return error.message;
		}
	}
	static async changeAvailability(req, res) {
		const { id } = req.params;
		try {
			const foundUser = await User.findOne({
				where: { id },
				returning: true
			});
			const user = await User.update(
				{ isAvailable: !foundUser.isAvailable },
				{
					where: { id },
					returning: true
				}
			);
			return res.status(200).json({
				updatedUser: user[1]
			});
		} catch (error) {
			return error;
		}
	}
}

export default Users;
