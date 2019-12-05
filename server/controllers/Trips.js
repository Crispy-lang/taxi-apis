import dotenv from "dotenv";
import { Trip, User, Invoice } from "../models/index";

dotenv.config();

/**
 * The class handle everything about the user
 */
class Trips {
	/**
	 *
	 *
	 * @static
	 * @param {*} req
	 * @param {*} res
	 * @returns {object} response
	 * @memberof Trips
	 */
	static async listTripsByStatus(req, res) {
		const { status } = req.params;
		try {
			const result = await Trip.findAll({
				where: {
					status
				}
			});
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
	 * @param {string} req
	 * @param {string} res
	 * @returns {object} response
	 * @memberof Trips
	 */
	static async terminateTrip(req, res) {
		const { id, status } = req.params;
		try {
			let foundTrip = await Trip.findOne({
				where: { id },
				returning: true
			});
			if (foundTrip.status === "completed") {
				return res.status(404).json({
					message: "The trip is already completed"
				});
			} else {
				const trip = await Trip.update(
					{ status },
					{
						where: { id },
						returning: true
					}
				);
				if (status === "completed") {
					const [Trip] = trip[1];
					await Invoice.create(
						{
							slug: `${Trip.id}-${Trip.driverId}-${Trip.riderId}-${Trip.createdAt}`,
							title: Trip.title,
							userId: Trip.riderId,
							cost: Trip.amount * Trip.distance,
							tripId: Trip.id,
							paid: false
						},
						{ returning: true }
					);
				}
				return res.status(200).json({
					updatedTrip: trip
				});
			}
		} catch (error) {
			return error;
		}
	}
	static async createTrip(req, res) {
		const trip = req.body;
		try {
			const driver = await User.findOne({
				where: { id: trip.driverId, role: "driver" },
				returning: true
			});
			const rider = await User.findOne({
				where: { id: trip.riderId, role: "rider" },
				returning: true
			});
			if (rider && driver) {
				const created = await Trip.create(
					{
						starting: trip.starting,
						destination: trip.destination,
						title: "from " + trip.starting + " to " + trip.destination,
						driverId: trip.driverId,
						riderId: trip.riderId,
						amount: trip.amount,
						distance: 10,
						status: "waitting"
					},
					{ returning: true }
				);
				return res.status(200).json({
					createdTrip: created
				});
			} else {
				return res.status(200).json({
					message: "a trip needs both valid rider and driver"
				});
			}
		} catch (error) {
			return error;
		}
	}
}

export default Trips;
