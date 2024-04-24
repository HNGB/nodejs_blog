
module.exports = {
    multipleMogooseToObject: function (arrays) {
        return arrays.map(a => a.toObject())
    },

    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}