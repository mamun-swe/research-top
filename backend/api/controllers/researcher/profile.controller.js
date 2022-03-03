
const voca = require("voca")
const Researcher = require("../../../models/researcher.model")
const validator = require("../../validators/researcher.validator")

/* My profile */
const me = async (req, res, next) => {
    try {
        let profileData = null
        const { id } = req.user

        const result = await Researcher.findById(id, { password: 0 })
        if (result && result._doc) {
            profileData = {
                ...result._doc,
                publications: result.publications.length
            }
        }

        res.status(200).json({
            status: true,
            data: profileData
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

        /* Update account */
        await Researcher.findByIdAndUpdate(
            id,
            {
                $set: {
                    name,
                    address,
                    country,
                    about,
                    education,
                    work,
                    otherProfiles
                }
            }
        )

        res.status(201).json({
            status: true,
            message: "Account updated."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Update username */
const updateUsername = async (req, res, next) => {
    try {
        const { id } = req.user
        const { username } = req.body

        if (!username) {
            return res.status(422).json({
                status: false,
                errors: { username: "Username is required." }
            })
        }

        /* slugify username */
        const slugifyUsername = await voca.slugify(username)

        /* check exist */
        const isExist = await Researcher.findOne({
            $and: [
                { _id: { $ne: id } },
                { username: slugifyUsername }
            ]
        })

        if (isExist) {
            return res.status(409).json({
                status: false,
                errors: { username: "Username already exist." }
            })
        }

        /* update new username */
        await Researcher.findByIdAndUpdate(
            id,
            { $set: { username: slugifyUsername } }
        )

        res.status(201).json({
            status: true,
            message: "Username updated."
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
    update,
    updateUsername
}