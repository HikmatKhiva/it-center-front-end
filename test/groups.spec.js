import { expect } from "chai";
import request from "supertest";

import app from "../app.js";

// describe("GET api/v1/group", () => {
//   it("should be return OK synchronously", async () => {
//     const response = await request(app).get("api/v1/group");
//     expect(response.text).to.equal("OK");
//     expect(response.status).to.equal(200);
//   });
// });

describe("GET /api/products", () => {
  it("should return a list of products", (done) => {
    request(app)
      .get("/api/products")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property("products").to.be.an("array");
        done();
      });
  }).timeout(5000); // Increase the timeout if needed
});