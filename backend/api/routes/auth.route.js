
const authRouter = require("express").Router()
const adminAuth = require("../controllers/auth/admin.controller")

/* Admin auth routes */
authRouter.post("/admin/register", adminAuth.register)
authRouter.post("/admin/login", adminAuth.login)
authRouter.post("/admin/reset", adminAuth.reset)


module.exports = {
    authRouter
}