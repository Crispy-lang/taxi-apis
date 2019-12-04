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
		// User.hasMany(models.Trip);
		// User.hasMany(models.Trip, {
		// 	foreignKey: "riderId",
		// 	sourceKey: "id"
		// });
		User.hasMany(models.Invoice, {
			foreignKey: "userId"
		});
		// ś
		// User.belongsToMany(models.Invoice, {
		// 	through: "TheirInvoice",
		// 	foreignKey: "userId"
		// });
	};

	return User;
};
``;
