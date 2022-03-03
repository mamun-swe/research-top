
const researcherRouter = require("express").Router()
const profile = require("../controllers/researcher/profile.controller")
const publication = require("../controllers/researcher/publication.controller")


/* Profile routes */
researcherRouter.get("/profile/me", profile.me)
researcherRouter.put("/profile/update", profile.update)
researcherRouter.put("/profile/update-username", profile.updateUsername)

/* Publication routes */
researcherRouter.get("/publication", publication.index)
researcherRouter.get("/publication/:id", publication.show)
researcherRouter.post("/publication", publication.store)

module.exports = {
    researcherRouter
}

