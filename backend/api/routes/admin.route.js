const adminRouter = require("express").Router()
const category = require("../controllers/admin/category.controller")


/* Category routes */
adminRouter.get("/category", category.index)
adminRouter.get("/category/:id", category.show)
adminRouter.post("/category", category.store)
adminRouter.put("/category/:id", category.update)
adminRouter.delete("/category/:id", category.destroy)



module.exports = {
    adminRouter
}

