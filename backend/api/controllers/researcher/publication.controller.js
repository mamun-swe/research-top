
const Category = require("../../../models/category.model")
const Researcher = require("../../../models/researcher.model")
const Publication = require("../../../models/publication.model")
const validator = require("../../validators/publication.validator")
const { isMongooseId } = require("../../middleware/mongooseId.middleware")
const { paginateQueryParams, paginate } = require("../../helper/pagination.helper")

/* List of items */
const index = async (req, res, next) => {
    try {
        const { id } = req.user
        const { limit, page } = paginateQueryParams(req.query)

        const totalItems = await Publication.countDocuments({ researcher: id })
        const results = await Publication.find(
            { researcher: id },
            {
                category: 1,
                researcher: 1,
                title: 1,
                publicationDate: 1,
                publisher: 1
            })
            .populate("category", "title")
            .sort({ _id: -1 })
            .skip((parseInt(page) * parseInt(limit)) - parseInt(limit))
            .limit(parseInt(limit))
            .exec()

        res.status(200).json({
            status: true,
            data: results,
            pagination: paginate({ page, limit, totalItems })
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Show specific item */
const show = async (req, res, next) => {
    try {
        const { id } = req.params

        await isMongooseId(id)

        const result = await Publication.findById(id)
            .populate("category", "title")
            .exec()

        res.status(200).json({
            status: true,
            data: result
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Store item */
const store = async (req, res, next) => {
    try {
        const { id } = req.user
        const {
            category,
            title,
            authors,
            publicationDate,
            conference,
            publisher,
            description
        } = req.body

        /* Check validation */
        const validate = await validator.store(req.body)
        if (!validate.isValid) {
            return res.status(422).json({
                status: false,
                errors: validate.errors
            })
        }

        await isMongooseId(category)

        const newPublication = new Publication({
            category,
            researcher: id,
            title,
            authors,
            publicationDate,
            conference,
            publisher,
            description
        })

        await newPublication.save()
        await Category.findByIdAndUpdate(
            category,
            { $push: { publications: newPublication._id } }
        )
        await Researcher.findByIdAndUpdate(
            id,
            { $push: { publications: newPublication._id } }
        )

        res.status(201).json({
            status: true,
            message: "Publication created."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = {
    index,
    show,
    store
}