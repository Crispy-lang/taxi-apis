import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../app";

chai.should();

chai.use(chaiHttp);

describe("Invoice tests", () => {
	it("gets all invoices", done => {
		chai
			.request(app)
			.post("/api/invoices")
			.end((err, res) => {
				console.log("res", res);
				done();
			});
	});
});
