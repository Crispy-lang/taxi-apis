"use strict";

import moment from "moment";

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Trips",
			[
				{
					starting: "kacyiru",
					destination: "gisozi",
					title: "trip1",
					amount: 200,
					driverId: 1,
					riderId: 2,
					distance: 9,
					status: "active",
					createdAt,
					updatedAt
				},
				{
					starting: "kacyiru",
					destination: "kagugu",
					title: "trip1",
					amount: 500,
					driverId: 2,
					riderId: 4,
					distance: 5,
					status: "completed",
					createdAt,
					updatedAt
				},
				{
					starting: "kacyiru",
					destination: "gisozi",
					title: "trip2",
					amount: 200,
					driverId: 1,
					riderId: 3,
					distance: 5,
					status: "waiting",
					createdAt,
					updatedAt
				},
				{
					starting: "kacyiru",
					destination: "gisozi",
					title: "trip3",
					amount: 200,
					driverId: 2,
					riderId: 5,
					distance: 5,
					status: "active",
					createdAt,
					updatedAt
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Trips", null, {});
	}
};
