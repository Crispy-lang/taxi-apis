"use strict";

export default {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("Trips", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			starting: {
				type: Sequelize.STRING,
				allowNull: false
			},
			destination: {
				type: Sequelize.STRING,
				allowNull: false
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false
			},
			driverId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			riderId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			amount: {
				type: Sequelize.INTEGER
			},
			distance: {
				type: Sequelize.INTEGER
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false
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
	down: (queryInterface, Sequelize) => queryInterface.dropTable("Trips")
};
