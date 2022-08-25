/**
 * Tests for posts routes
 */
import Post from "../models/Post.js";

import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../index.js";

const should = chai.should();
