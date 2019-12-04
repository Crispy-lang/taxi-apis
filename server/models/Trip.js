"use strict";
module.exports = (sequelize, DataTypes) => {
	let Trip = sequelize.define(
		"Trip",
		{
			starting: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			destination: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			amount: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false
			},
			driverId: DataTypes.INTEGER,
			riderId: DataTypes.INTEGER,
			distance: DataTypes.INTEGER,
			status: DataTypes.STRING
		},
		{}
	);

	Trip.associate = function(models) {
		Trip.belongsTo(models.User, {
			foreignKey: "driverId",
		});
		Trip.belongsTo(models.User, {
			foreignKey: "riderId",
		});

	};

	return Trip;
};
