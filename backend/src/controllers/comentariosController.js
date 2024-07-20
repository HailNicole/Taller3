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

exports.getComentarios = async(req, res) => {
    try {
        const comentarios = await comentario.find();
        res.json(comentarios);
    } catch (error) {
        res.json({error: error.message});
    }
}
    
exports.getComentario = async(req, res) => {
    const { comentarioId } = req.params;
    
    try {
        const comentarioFind = await comentario.findById(comentarioId);
        res.json(comentarioFind);
    } catch (error) {
        res.json({error: error.message});
    }
}

exports.setComentario = async (req, res) => {
    const { comentarioId } = req.params;

   try {
    const Comentario = await comentario.findByIdAndUpdate(comentarioId, req.body, { new: true });
    res.json(Comentario );
   } catch (error) {
    res.json({error: error.message});
   }
}