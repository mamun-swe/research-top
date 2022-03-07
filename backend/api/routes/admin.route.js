const adminRouter = require("express").Router()
const category = require("../controllers/admin/category.controller")
const researcher = require("../controllers/admin/researcher.controller")


/* Category routes */
adminRouter.get("/category", category.index)
adminRouter.get("/category/:id", category.show)
adminRouter.post("/category", category.store)
adminRouter.put("/category/:id", category.update)
adminRouter.delete("/category/:id", category.destroy)

/* Researcher routes */
adminRouter.get("/researcher", researcher.index)
adminRouter.get("/researcher/:id", researcher.show)
adminRouter.get("/researcher/publications/:id", researcher.publications)

module.exports = {
    adminRouter
}

