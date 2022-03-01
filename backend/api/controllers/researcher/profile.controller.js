
const Researcher = require("../../../models/researcher.model")
const validator = require("../../validators/researcher.validator")

/* My profile */
const me = async (req, res, next) => {
    try {
        const { id } = req.user

        const result = await Researcher.findById(id, { password: 0, journals: 0 })
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

/* Update profile */
const update = async (req, res, next) => {
    try {
        const { id } = req.user
        const {
            name,
            username,
            address,
            country,
            about,
            education,
            work,
            otherProfiles
        } = req.body

        /* Check validity */
        const validate = await validator.profileUpdate(req.body)
        if (!validate.isValid) {
            return res.status(422).json({
                status: false,
                errors: validate.errors
            })
        }

        res.status(201).json({
            status: true,
            data: { ...req.body }
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = {
    me,
    update
}