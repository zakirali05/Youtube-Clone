const User = require("../models/user.js")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
require("dotenv").config({ path: __dirname + "/.env" })

const Register = async (req, res) => {
  try {
    let { username, password, avatar, channels, emailaddress } = req.body
    let user = await User.findOne({ $or: [{ username }, { emailaddress }] })
    if (user) {
      res.send()
    }
    let hashpassword = await bcrypt.hash(password, 10)
    const userdata = await User.create({
      avatar: {
        public_id: "",
        url: "",
      },
      emailaddress,
      username,
      password: hashpassword,
      channels: [],
    })
    await userdata.save()
    let token = jwt.sign({ emailaddress }, process.env.SECRET)
    res.json({ token })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const Login = async (req, res) => {
  try {
    let { username, password, emailaddress } = req.body
    let user = await User.findOne({ $or: [{ username }, { emailaddress }] })
    if (!user) {
      res.send()
    }
    let password_check = await bcrypt.compare(password, user.password)
    if (!password_check) {
      res.send()
    }
    let token = jwt.sign({ emailaddress }, process.env.SECRET)
    res.json({ token, user })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const Delete = async (req, res) => {
  let { username, password, emailaddress } = req.body
  let password_check = await bcrypt.compare(password, user.password)
  if (!password_check) {
    res.send()
  }
  await User.deleteOne({ $or: [{ username }, { emailaddress }] })
  res.send()
}

module.exports = { Register, Login, Delete }
