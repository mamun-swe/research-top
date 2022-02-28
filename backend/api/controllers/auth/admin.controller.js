
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Admin = require("../../../models/admin.model")
const validator = require("../../validators/admin-auth.validator")

/* Register an account */
const register = async (req, res, next) => {
    try {
        const { name, email, phone, password } = req.body

        /* Check validity */
        const validate = await validator.register(req.body)
        if (!validate.isValid) {
            return res.status(422).json({
                status: false,
                errors: validate.errors
            })
        }

        /* check email available */
        const isEmailExist = await Admin.findOne({ email })
        if (isEmailExist) {
            return res.status(409).json({
                status: false,
                errors: {
                    email: "Address already used."
                }
            })
        }

        /* check phone available */
        const isPhoneExist = await Admin.findOne({ phone })
        if (isPhoneExist) {
            return res.status(409).json({
                status: false,
                errors: {
                    phone: "Phone number already used."
                }
            })
        }

        /* hash password generate */
        const hashPassword = await bcrypt.hash(password, 10)

        /* new admin */
        const newAdmin = new Admin({
            name,
            email,
            phone,
            password: hashPassword
        })

        await newAdmin.save()

        res.status(201).json({
            status: true,
            message: "Admin created."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Login to account */
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        /* Check validity */
        const validate = await validator.login(req.body)
        if (!validate.isValid) {
            return res.status(422).json({
                status: false,
                errors: validate.errors
            })
        }

        /* Account find using email */
        const account = await Admin.findOne({ email })
        if (!account) {
            return res.status(404).json({
                status: false,
                errors: {
                    message: "Invalid email or password."
                }
            })
        }

        /* Compare with password */
        const result = await bcrypt.compare(password, account.password)
        if (!result) {
            return res.status(404).json({
                status: false,
                errors: {
                    message: "Invalid email or password."
                }
            })
        }

        /* Generate JWT token */
        const token = await jwt.sign(
            {
                id: account._id,
                name: account.name,
                role: account.role,
            }, process.env.JWT_SECRET, { expiresIn: '1d' }
        )

        return res.status(200).json({
            status: true,
            token
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}

/* Reset account passwors */
const reset = async (req, res, next) => {
    try {
        res.status(200).json({
            status: true,
            message: "Coming soon."
        })
    } catch (error) {
        if (error) {
            console.log(error)
            next(error)
        }
    }
}


module.exports = {
    register,
    login,
    reset
}