"use strict";

export default{
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("Trips", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			slug: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false
			},
			amount: {
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
