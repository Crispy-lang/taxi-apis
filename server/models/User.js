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
			roles: {
				type: DataTypes.STRING
			},
			phone: {
				type: DataTypes.STRING
			},
			roleId: {
				type: DataTypes.INTEGER
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
		User.belongsTo(models.Role, {
			foreignKey: "roleId",
			targetKey: "id"
		});
	};

	return User;
};
