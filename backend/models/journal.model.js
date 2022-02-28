const { Schema, model } = require("mongoose")

const journalSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
}, {
    timestamps: true
})


const journal = model("Journal", journalSchema)
module.exports = journal