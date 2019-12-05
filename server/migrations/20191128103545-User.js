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
			role: {
				type: Sequelize.STRING
			},
			phone: {
				type: Sequelize.INTEGER,
				unique: true
			},
			location: {
				type: Sequelize.STRING,
				allowNull: false
			},
			distance: {
				type: Sequelize.DECIMAL,
				allowNull: false
			},
			isAvailable: {
				type: Sequelize.BOOLEAN
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
