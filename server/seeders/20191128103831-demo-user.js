"use strict";

import moment from "moment";

// generate createdDate and updateDate
const createdAt = moment().format();
const updatedAt = createdAt;

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					username: "girad",
					role: "driver",
					phone: 444,
					location: "kacyiru",
					distance: 0,
					isAvailable: true,
					createdAt,
					updatedAt
				},
				{
					username: "diamu",
					role: "rider",
					phone: 333,
					location: "kacyiru",
					isAvailable: null,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "prinse",
					role: "driver",
					phone: 222,
					location: "kacyiru",
					isAvailable: false,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "fauga",
					role: "rider",
					phone: 111,
					location: "kicukiro",
					isAvailable: null,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "bezos",
					role: "rider",
					phone: 555,
					location: "kacyiru",
					isAvailable: true,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "jo",
					role: "rider",
					phone: 5555,
					location: "kacyiru",
					isAvailable: true,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "fro",
					role: "rider",
					phone: 666,
					location: "kacyiru",
					isAvailable: true,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "beat",
					role: "rider",
					phone: 777,
					location: "kacyiru",
					isAvailable: true,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "jess",
					role: "rider",
					phone: 300,
					location: "kicukiro",
					isAvailable: true,
					distance: 0,
					createdAt,
					updatedAt
				},
				{
					username: "doris",
					role: "rider",
					phone: 800,
					location: "kicukiro",
					isAvailable: true,
					distance: 0,
					createdAt,
					updatedAt
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	}
};
