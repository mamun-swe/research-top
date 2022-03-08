
const publicRouter = require("express").Router()
const cache = require("../cache")

const category = require("../controllers/public/category.controller")
const researcher = require("../controllers/public/researcher.controller")


/* Public routes */
publicRouter.get("/category", cache.Category, category.index)
publicRouter.get("/researcher", researcher.index)
publicRouter.get("/researcher/:username", researcher.show)
publicRouter.get("/researcher/publications/:username", researcher.publications)

module.exports = {
    publicRouter
}

