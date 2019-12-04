module.exports = (sequelize, DataTypes) => {
	const Invoice = sequelize.define(
		"Invoice",
		{
			slug: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			title: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			userId: {
				type: DataTypes.INTEGER
			},
			cost: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			tripId: {
				type: DataTypes.INTEGER
			},
			paid: {
				type: DataTypes.BOOLEAN
			}
		},
		{}
	);
	Invoice.associate = function(models) {
		Invoice.belongsTo(models.Trip, {
			foreignKey: "tripId",
			targetKey: "id"
		});
		Invoice.belongsTo(models.User, {
			foreignKey: "userId",
			targetKey: "id"
		});
	};
	return Invoice;
};
