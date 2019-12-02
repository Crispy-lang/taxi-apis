"use strict";
module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			username: {
				type: Sequelize.STRING,
				unique: true
			},
			firstname: {
				type: Sequelize.STRING
			},
			lastname: {
				type: Sequelize.STRING
			},
			role: {
				type: Sequelize.STRING
			},
			phone: {
				type: Sequelize.INTEGER,
				unique: true
			},
			location:{
				type: Sequelize.STRING,
				allowNull: false
			},
			isAvailable: {
				type: Sequelize.BOOLEAN
			},
			distance: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable("Users")
};
