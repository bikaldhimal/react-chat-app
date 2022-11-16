const router = require("express").Router();
const User = require("../model/User");
const Chat = require("../model/Chat");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  signupValidation,
  loginValidation,
  messageValidation,
} = require("../validation");

router.post("/signup", async (req, res) => {
  // Validation before creating a user
  const { error } = signupValidation(req.body);

  //   Error response
  if (error) return res.status(400).send(error.details[0].message);

  //   Check if user already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //   Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //   Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id, name: user.name });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  // Validation before loggin in a user
  const { error } = loginValidation(req.body);

  //   Error response
  if (error) return res.status(400).send(error.details[0].message);

  //   Check if user already exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist!");

  //   Check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password!");

  //   Creating and assigning a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

// Chatting Messages
router.post("/message", async (req, res) => {
  // validation before sending message
  const { error } = messageValidation(req.body);

  // Error response
  if (error) return res.status(400).send(error.details[0].message);

  //   Check if user already exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist!");

  //   Create a new message
  const chat = new Chat({
    message: req.body.message,
  });
  try {
    const saveChat = await chat.save();
    res.send({
      chat: chat._id,
      sender: chat.sender_id,
      receiver: receiver_id,
      message: chat.message,
      date: chat.date,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// router.post('/post-chat', (req, res) {

// })

module.exports = router;
