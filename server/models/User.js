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
			distance: {
				type: DataTypes.DECIMAL,
				allowNull: false
			},
			isAvailable: {
				type: DataTypes.BOOLEAN,
				allowNull: true
			}
		},
		{}
	);
	User.associate = models => {
		User.hasMany(models.Invoice, {
			foreignKey: "userId"
		});
	};
	User.associate = models => {
		User.hasOne(models.UserLocation, {
			foreignKey: "userId"
		});
	};

	return User;
};
