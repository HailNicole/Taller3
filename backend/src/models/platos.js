const {Schema, model} = require ('mongoose');

const platosSchema = new Schema({
    nombre: String,
    desc: String,
    costo: Number,
    cant: Number,
    img: String,
},{
    timestamps: true
});

module.exports = model('platos', platosSchema);