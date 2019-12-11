export default (sequelize, DataTypes) => {
	const UserLocation = sequelize.define(
		"UserLocation",
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: true,
				references: {
					model: "Users",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			latitude: {
				type: DataTypes.DECIMAL(10, 7),
				allowNull: false
			},
			longitude: {
				type: DataTypes.DECIMAL(10, 7),
				allowNull: false
			}
		},
		{}
	);
	UserLocation.associate = models => {
		UserLocation.belongsTo(models.User, {
			foreignKey: "userId",
		});
	};

	return UserLocation;
};
