const User = require("../models/user.js");

const Register = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const Login = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { Register, Login };
