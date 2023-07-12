const express = require("express")
const router = express.Router()
const { Register, Login, Delete } = require("../controllers/user")

router.post("/register", Register)
router.post("/login", Login)
router.delete("/delete", Delete)
module.exports = router
