
const router = require("express").Router()
const { authRouter } = require("./auth.route")
const { adminRouter } = require("./admin.route")
const { isAdmin } = require("../middleware/permission.middleware")


router.use("/auth", authRouter)
router.use("/admin", isAdmin, adminRouter)

module.exports = { router }