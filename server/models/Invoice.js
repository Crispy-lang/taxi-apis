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
				type: DataTypes.INTEGER,
				references: {
					model: "User",
					Key: "id"
				}
			},
			cost: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			tripId: DataTypes.INTEGER
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
		Invoice.belongsToMany(models.User, {
			through: "TheirInvoice",
			foreignKey: "invoiceId",
			targetKey: "id"
		});
	};
	return Invoice;
};
