import dotenv from "dotenv";

dotenv.config();

const config = {
	development: {
		username: process.env.PGUSER,
		password: process.env.PGPASSWORD,
		database: process.env.PGDATABASE,
		host: process.env.PGHOST,
		dialect: "postgres",
		logging: false,
		seederStorage: "sequelize"
	},
	test: {
		username: process.env.PGUSER,
		password: process.env.PGPASSWORD,
		database: process.env.PGDATABASE_TEST,
		host: process.env.PGHOST,
		dialect: "postgres",
		logging: false,
		seederStorage: "sequelize"
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOSTNAME,
		dialect: "postgres",
		logging: false,
		seederStorage: "sequelize"
	}
};

module.exports = config;
