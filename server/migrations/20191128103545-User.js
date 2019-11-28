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
			roles: {
				type: Sequelize.STRING
			},
			phone: {
				type: Sequelize.INTEGER,
				unique: true
			},
			roleId: {
				type: Sequelize.INTEGER
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
