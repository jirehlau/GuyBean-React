const User = require('../models/userModels');
const jwt = require('jsonwebtoken'); // import the jwt library
const bcrypt = require('bcrypt'); // import bcrypt

const SALT_ROUNDS = 6; // tell bcrypt how many times to randomize the generation of salt. usually 6 is enough.

async function create(req, res) {
  console.log(req.body)
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    // console.log("hashing the password")
    const user = await User.create({name: req.body.name, email:req.body.email, password:hashedPassword,});
    // console.log("This line is trying to get the user in the database")

    // creating a jwt: 
    // the first parameter specifies what we want to put into the token (in this case, our user document)
    // the second parameter is a "secret" code. This lets our server verify if an incoming jwt is legit or not.
    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    // console.log("creating a JWT token")
    res.json(token); // send it to the frontend
    // console.log("send token to frontend")
  } catch (err) {
    // console.log("user creation error", err)
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    // check password. if it's bad throw an error.
    if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();

    // if we got to this line, password is ok. give user a new token.
    const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
    res.json(token)
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

module.exports = {
  create,
  login
};