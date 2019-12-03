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
			isCompleted: DataTypes.BOOLEAN
		},
		{}
	);

	Trip.associate = function(models) {
		Trip.belongsTo(models.User, {
			foreignKey: "driverId",
			targetKey: "id"
		});
		Trip.belongsTo(models.User, {
			foreignKey: "riderId",
			targetKey: "id"
		});
		Trip.hasMany(models.Invoice, {
			foreignKey: "tripId",
			sourceKey: "id"
		});
		Trip.belongsToMany(models.User, {
			through: "TheirInvoice",
			foreignKey: "tripId",
			targetKey: "id"
		});

	};

	return Trip;
};
