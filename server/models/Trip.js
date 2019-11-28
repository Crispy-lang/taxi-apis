"use strict";
module.exports = (sequelize, DataTypes) => {
	let Trip = sequelize.define(
		"Trip",
		{
			slug: {
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

			userId: DataTypes.INTEGER
		},
		{}
	);

	Trip.associate = function(models) {
		Trip.belongsTo(models.User, {
			foreignKey: "userId",
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
