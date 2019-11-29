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
					roles: "driver",
					phone: 444,
					roleId: 2,
					createdAt,
					updatedAt
				},
				{
					username: "diamu",
					firstname: "diane",
					lastname: "murekatete",
					roles: "rider",
					phone: 333,
					roleId: 1,
					createdAt,
					updatedAt
				},
				{
					username: "prinse",
					firstname: "prince",
					lastname: "sengayire",
					roles: "driver",
					phone: 222,
					roleId: 2,
					createdAt,
					updatedAt
				},
				{
					username: "fauga",
					firstname: "faustin",
					lastname: "kagabo",
					roles: "rider",
					phone: 111,
					roleId: 1,
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
