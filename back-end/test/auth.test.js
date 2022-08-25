/**
 * Tests for auth routes
 */
import User from "../models/User.js";

import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../index.js";

const should = chai.should();
const newUser = {
  username: "new_test_user",
  password: "test",
};

chai.use(chaiHttp);

describe("Auth tests", () => {
  /**
   * Clear the database before each test
   */
  beforeEach((done) => {
    User.deleteMany({}, (err) => {
      done();
    });
  });

  /**
   * Test /auth/register POST route
   */
  describe("/api/auth/register", () => {
    it("it should POST a valid user with unique username and a password", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("username").eql("new_test_user");
          res.body.should.have.property("password");
          done();
        });
    });

    it("it should fail to POST an invalid user with duplicate username and a password", (done) => {
      const duplicateUser = {
        username: "new_test_user",
        password: "test",
      };

      const user = User(newUser);
      user.save().then(() => {
        chai
          .request(app)
          .post("/api/auth/register")
          .send(duplicateUser)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });

    it("it should fail to POST an invalid user without a password", (done) => {
      let newUser = {
        username: "new_test_user",
      };

      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it("it should fail to POST an invalid user without a username", (done) => {
      let newUser = {
        password: "sugma",
      };

      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  /**
   * Test /auth/login POST route
   */
  describe("/api/auth/login", () => {
    it("it should POST a successful login", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end(() => {
          chai
            .request(app)
            .post("/api/auth/login")
            .send(newUser)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("username").eql(newUser.username);
              res.body.should.not.have.property("password");
              done();
            });
        });
    });

    it("it should not POST a successful login for incorrect password", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end(() => {
          chai
            .request(app)
            .post("/api/auth/login")
            .send({ password: "test1", username: "new_test_user" })
            .end((err, res) => {
              res.should.have.status(400);
              done();
            });
        });
    });

    it("it should not POST a successful login for incorrect username", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end(() => {
          chai
            .request(app)
            .post("/api/auth/login")
            .send({ password: "test", username: "broked" })
            .end((err, res) => {
              res.should.have.status(400);
              done();
            });
        });
    });

    it("it should not POST a successful login for not including username", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send(newUser)
        .end(() => {
          chai
            .request(app)
            .post("/api/auth/login")
            .send({ password: "test" })
            .end((err, res) => {
              res.should.have.status(400);
              done();
            });
        });
    });
  });
});
