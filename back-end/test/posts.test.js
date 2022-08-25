/**
 * Tests for posts routes
 */
import Post from "../models/Post.js";

import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../index.js";

chai.use(chaiHttp);

const should = chai.should();
const newPost = {
  title: "new post",
  content: "content",
};

describe("Post tests", () => {
  /**
   * Clear the database before each test.
   */
  beforeEach((done) => {
    Post.deleteMany({}, (err) => {
      done();
    });
  });

  /**
   * Test /posts/ POST route to create a post
   */
  describe("/posts/", () => {
    it("it should POST successfully and create a new post", (done) => {
      chai
        .request(app)
        .post("/api/posts/")
        .send(newPost)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("title").eql("new post");
          res.body.should.have.property("content").eql("content");
          done();
        });
    });

    it("it should not POST successfully a post without a title", (done) => {
      chai
        .request(app)
        .post("/api/posts")
        .send({ content: "content" })
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.not.have.property("title");
          done();
        });
    });

    it("it should not POST successfully a post with a duplicate title", (done) => {
      chai
        .request(app)
        .post("/api/posts")
        .send(newPost)
        .end(() => {
          chai
            .request(app)
            .post("/api/posts")
            .send(newPost)
            .end((err, res) => {
              res.should.have.status(500);
              res.body.should.not.have.property("title");
              done();
            });
        });
    });

    it("it should not POST successfully a post without content", (done) => {
      chai
        .request(app)
        .post("/api/posts")
        .send({ title: "new post" })
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.not.have.property("title");
          done();
        });
    });
  });

  /**
   * Test /posts/:id PUT route to update a post
   */
  describe("/post/:id", () => {
    it("it should PUT an update to the post", (done) => {
      chai
        .request(app)
        .post("/api/posts/")
        .send(newPost)
        .end((err, res) => {
          let postId = res.body._id;
          chai
            .request(app)
            .put(`/api/posts/${postId}`)
            .send({ title: "updated title", content: "updated content" })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("title").eql("updated title");
              res.body.should.have.property("content").eql("updated content");
              done();
            });
        });
    });
  });
});
