const comentario = require ('../models/comentarios')

exports.agregarComentario = async(req, res) =>{
    try{
        const newComentario = new comentario (req.body)
        await newComentario.save()
        res.status(200).json('Comentario Agregado')
    }catch(err){
        res.status(500).send('Error al agregar comentario')
    }
}