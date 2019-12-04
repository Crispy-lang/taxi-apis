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
					firstname: "gisele",
					lastname: "iradukunda",
					role: "driver",
					phone: 444,
					location: "kacyiru",
					isAvailable: true,
					distance: 3,
					createdAt,
					updatedAt
				},
				{
					username: "diamu",
					firstname: "diane",
					lastname: "murekatete",
					role: "rider",
					phone: 333,
					location: "kacyiru",
					isAvailable: null,
					distance: 5,
					createdAt,
					updatedAt
				},
				{
					username: "prinse",
					firstname: "prince",
					lastname: "sengayire",
					role: "driver",
					phone: 222,
					location: "kacyiru",
					isAvailable: false,
					distance: 4,
					createdAt,
					updatedAt
				},
				{
					username: "fauga",
					firstname: "faustin",
					lastname: "kagabo",
					role: "rider",
					phone: 111,
					location: "kicukiro",
					isAvailable: null,
					distance: 2,
					createdAt,
					updatedAt
				},
				{
					username: "bezos",
					firstname: "Luc",
					lastname: "Tuyi",
					role: "rider",
					phone: 555,
					location: "kacyiru",
					isAvailable: true,
					distance: 3,
					createdAt,
					updatedAt
				},
				{
					username: "jo",
					firstname: "jordy",
					lastname: "simbizi",
					role: "rider",
					phone: 5555,
					location: "kacyiru",
					isAvailable: true,
					distance: 3,
					createdAt,
					updatedAt
				},
				{
					username: "fro",
					firstname: "frank",
					lastname: "mutabazi",
					role: "rider",
					phone: 666,
					location: "kacyiru",
					isAvailable: true,
					distance: 3,
					createdAt,
					updatedAt
				},
				{
					username: "beat",
					lastname: "mutombo",
					firstname: "vincent",
					role: "rider",
					phone: 777,
					location: "kacyiru",
					isAvailable: true,
					distance: 3,
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
