const plato = require ('../models/platos')

exports.obtenerPlatos = async (req, res) =>{
    try{
        const platos = await plato.find()
        res.status(200).json(platos)
    }catch(err){
        res.status(500).send('Error al obtener los platos');
    }
}

exports.crearPlato = async (req, res) =>{
    try{
        const newPlato = new plato(req.body)
        await newPlato.save()
        res.status(200).json('Plato Agregado')
    }catch(err){
        res.status(500).send('Error al crear el plato')
    }
}

exports.obtener_id_plato = async(req, res) =>{
    try{
        const id_plato = req.params.id
        const plate = await plato.findById(id_plato)
        
        if(!plate){
            return res.status(400).json({ error: 'No existe el plato' });
        }
        const platoId = plate._id
        
        res.status(200).json({platoId});
    }catch(err){
        res.status(500).send('Error al obtener el plato')
    }
}

exports.obtener_plato_por_id = async(req, res) =>{
    try{
        const id_plato = req.params.id
        const plate = await plato.findById(id_plato)
        
        if(!plate){
            return res.status(400).json({ error: 'No existe el plato' });
        }
        res.status(200).json({plate});
    }catch(err){
        res.status(500).send('Error al obtener el plato')
    }
}