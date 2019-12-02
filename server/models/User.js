"use strict";
export default (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			firstname: {
				type: DataTypes.STRING
			},
			lastname: {
				type: DataTypes.STRING
			},
			role: {
				type: DataTypes.STRING
			},
			phone: {
				type: DataTypes.STRING
			},
			location: {
				type: DataTypes.STRING,
				allowNull: false
			},
			isAvailable: {
				type: DataTypes.BOOLEAN,
				allowNull: true
			},
			distance: {
				type: DataTypes.INTEGER,
				allowNull: true
			}
		},
		{}
	);
	User.associate = models => {
		User.hasMany(models.Trip, {
			foreignKey: "userId",
			sourceKey: "id"
		});
		User.hasMany(models.Invoice, {
			foreignKey: "userId"
		});
		User.belongsToMany(models.Trip, {
			through: "TakenTrips",
			foreignKey: "userId",
			targetKey: "id"
		});
		User.belongsToMany(models.Invoice, {
			through: "TheirInvoice",
			foreignKey: "userId"
		});
	};

	return User;
};
``;
