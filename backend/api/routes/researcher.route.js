
const researcherRouter = require("express").Router()
const profile = require("../controllers/researcher/profile.controller")


/* Profile routes */
researcherRouter.get("/profile/me", profile.me)
researcherRouter.put("/profile/update", profile.update)


module.exports = {
    researcherRouter
}

