const {Schema, model} = require ('mongoose');

const comentariosSchema = new Schema({
    nombre: String,
    apellido: String,
    fecha: Date,
    nombreMesero: String,
    calificacion: Number,
    comentario: String
},{
    timestamps: true
});

module.exports = model('comentarios', comentariosSchema);