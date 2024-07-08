const {Schema, model} = require ('mongoose');

const pedidosSchema = new Schema({
    nombre_plato: String,
    cantidad: Number,
    descripcion: String,
    esp: String,
    costoTotal: Number,
    id_plato:String
},{
    timestamps: true
});

module.exports = model('pedidos', pedidosSchema);