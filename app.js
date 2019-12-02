import express from "express";
import routes from "./server/routes";

// Create global app object
const app = express();

app.use(express.json());

app.use(routes);

app.use("*", (req, res) => {
	res.status(400).json({ status: 400, message: "Bad request" });
});

// finally, let's start our server...
const server = app.listen(process.env.PORT, () => {});

export default server;
