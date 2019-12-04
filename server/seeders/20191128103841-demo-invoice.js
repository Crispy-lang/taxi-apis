"use strict";

import moment from "moment";

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Invoices",
			[
				{
					slug: "invoice-yambere",
					title: "urugendo rwambere",
					userId: 2,
					cost: 1000,
					tripId: 1,
					paid: false,
					createdAt,
					updatedAt
				},
				{
					slug: "invoice-yakabiri",
					title: "urugendo rwakabiri",
					userId: 4,
					cost: 1000,
					tripId: 2,
					paid: false,
					createdAt,
					updatedAt
				},
				{
					slug: "invoice-yagatatu",
					title: "urugendo rwagatatu",
					userId: 2,
					cost: 1000,
					tripId: 3,
					paid: false,
					createdAt,
					updatedAt
				},
				{
					slug: "invoice-yakane",
					title: "urugendo rwakane",
					userId: 4,
					cost: 1000,
					tripId: 1,
					paid: false,
					createdAt,
					updatedAt
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Invoices", null, {});
	}
};
