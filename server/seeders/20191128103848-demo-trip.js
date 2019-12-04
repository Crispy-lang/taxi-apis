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
					slug: "trip-yambere",
					title: "trip1",
					amount: 200,
					userId: 1,
					createdAt,
					updatedAt
				},
				{
					slug: "trip-yakabiri",
					title: "trip1",
					amount: 200,
					userId: 2,
					createdAt,
					updatedAt
				},
				{
					slug: "trip-yagatatu",
					title: "trip1",
					amount: 200,
					userId: 1,
					createdAt,
					updatedAt
				},
				{
					slug: "trip-yakane",
					title: "trip1",
					amount: 200,
					userId: 1,
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
