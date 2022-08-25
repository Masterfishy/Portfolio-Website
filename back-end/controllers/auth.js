import User from "../models/User.js";
import bcrypt from "bcrypt";

/**
 * POST /register route to create a new user.
 * @param {*} req The request object
 * @param {*} res The response object
 */
async function register(req, res) {
  try {
    // Hash the password
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    // Save the new user
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(`Could not register user! ${err.message}`);
  }
}

/**
 * POST /login route to login as a user.
 * @param {*} req The response object
 * @param {*} res The request object
 */
async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Wrong credentials!");
      return;
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json("Wrong credentials!");
      return;
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(`Something went wrong! ${err.message}`);
  }
}

export default { register, login };
