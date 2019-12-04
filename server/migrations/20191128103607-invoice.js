"use strict";

module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("Invoices", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			slug: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			tripId: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			cost: {
				type: Sequelize.INTEGER
			},
			paid: {
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
	down: (queryInterface, Sequelize) => queryInterface.dropTable("Invoices")
};
