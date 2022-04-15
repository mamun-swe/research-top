const { isEmpty, isEmail } = require("./helper.validator")

/* Register validator */
const register = data => {
    let errors = {}

    if (!data.name || isEmpty(data.name)) errors.name = "Name is required."
    if (!data.email || isEmpty(data.email)) errors.email = "E-mail is required."
    if (data.email && !isEmail(data.email)) errors.email = "Address isn't valid"
    if (!data.password || isEmpty(data.password)) errors.password = "Password is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

/* Login validator */
const login = data => {
    let errors = {}

    if (!data.email || isEmpty(data.email)) errors.email = "E-mail is required."
    if (data.email && !isEmail(data.email)) errors.email = "Address isn't valid"
    if (!data.password || isEmpty(data.password)) errors.password = "Password is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

/* Reset */
const reset = data => {
    let errors = {}

    if (!data.email || isEmpty(data.email)) errors.email = "E-mail is required."
    if (data.email && !isEmail(data.email)) errors.email = "Address isn't valid"

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

/* Profile update */
const profileUpdate = data => {
    let errors = {}

    /* handle education errors */
    let educationErrors = []

    if (data.education) {
        if (data.education.length > 0) {
            for (let i = 0; i < data.education.length; i++) {
                const element = data.education[i]
                let eduErrorObj = {}

                if (!element.school || isEmpty(element.school)) eduErrorObj.school = "School is required."
                if (!element.department || isEmpty(element.department)) eduErrorObj.department = "Department is required."
                if (!element.passingYear || isEmpty(element.passingYear)) eduErrorObj.passingYear = "Passing year is required."

                if (Object.keys(eduErrorObj).length > 0) educationErrors.push(eduErrorObj)
            }
        }
    }

    if (educationErrors.length > 0) errors.education = educationErrors

    /* handle work errors */
    let workErrors = []
    if (data.work) {
        if (data.work.length > 0) {
            for (let i = 0; i < data.work.length; i++) {
                const element = data.work[i]
                let workErrorObj = {}

                if (!element.organization || isEmpty(element.organization)) workErrorObj.organization = "Organization is required."
                if (!element.department || isEmpty(element.department)) workErrorObj.department = "Department is required."
                if (!element.position || isEmpty(element.position)) workErrorObj.position = "Position is required."
                if (!element.startFrom || isEmpty(element.startFrom)) workErrorObj.startFrom = "Start from date is required."

                if (Object.keys(workErrorObj).length > 0) workErrors.push(workErrorObj)
            }
        }
    }


    if (workErrors.length > 0) errors.work = workErrors

    /* handle others profile errors */
    let otherProfileErrors = []
    if (data.otherProfiles) {
        if (data.otherProfiles.length > 0) {
            for (let i = 0; i < data.otherProfiles.length; i++) {
                const element = data.otherProfiles[i]
                let profileErrorObj = {}

                if (!element.title || isEmpty(element.title)) profileErrorObj.title = "Title is required."
                if (!element.link || isEmpty(element.link)) profileErrorObj.link = "Link is required."

                if (Object.keys(profileErrorObj).length > 0) otherProfileErrors.push(profileErrorObj)
            }
        }
    }

    if (otherProfileErrors.length > 0) errors.otherProfiles = otherProfileErrors

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

/* Add work */
const addWork = data => {
    let errors = {}

    if (!data.organization || isEmpty(data.organization)) errors.organization = "Organization is required."
    if (!data.department || isEmpty(data.department)) errors.department = "Department is required."
    if (!data.position || isEmpty(data.position)) errors.position = "Position is required."
    if (!data.startFrom || isEmpty(data.startFrom)) errors.startFrom = "Start from date is required."

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}


module.exports = {
    login,
    register,
    reset,
    profileUpdate,
    addWork
}