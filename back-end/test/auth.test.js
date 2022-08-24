/**
 * Tests for auth routes
 */
import User from "../models/User.js";

import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../index.js";

chai.use(chaiHttp);

describe("Auth tests", () => {
  /**
   * Clear the database before each test
   */
  beforeEach((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  /**
   * Test /auth/register /POST route
   */
  describe("/api/auth/register", () => {
    it("it should POST a valid user with unique username and a password", (done) => {
      const newUser = {
        username: "new_test_user",
        password: "test",
      };

      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end((err, res) => {
          res.body.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("user");
          res.body.user.should.have.property("username").eql("new_test_user");
          res.body.user.should.have.property("password");
          done();
        });
    });
  });
});
