const pedido = require ('../models/pedidos')

exports.obtenerPedidos = async(req, res) =>{
    try{
        const pedidos = await pedido.find()
        res.status(200).json(pedidos)
    }catch(err){
        res.status(500).send('Error al obtener los pedidos');
    }
}

exports.crearPedido = async(req, res) =>{
    try{
        const newPedido = new pedido (req.body)
        
        await newPedido.save()
        res.status(200).json('Pedido Agregado')
    }catch(err){
        res.status(500).send('Error al agregar el pedido')
    }
}

exports.editarPedido = async(req, res) =>{
    try{
        const pedido_editar = req.body
        let editar_pedido = await pedido.findById(req.params.id)
        if(!editar_pedido){
            return res.status(400).json({ error: 'No existe el producto' });
        }

        editar_pedido.cantidad = pedido_editar.cantidad
        editar_pedido.esp = pedido_editar.esp
        editar_pedido.costoTotal = pedido_editar.costoTotal

        editar_pedido = await pedido.findByIdAndUpdate(
            {_id: req.params.id},
            editar_pedido,
            {new:true}
        )
        res.status(200).json({ msg: 'Pedido Editado exitosamente' });
    }catch(err){
        res.status(500).send('Error al editar el pedido')
    }
}

exports.eliminarPedido = async(req, res) =>{
    try{
        const pedidoId = req.params.id;
        let pedido_borrar = await pedido.findById(pedidoId)
        
        if (!pedido_borrar) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }

        await pedido.findOneAndDelete({_id:pedidoId})

        res.status(200).json({ msg: 'Pedido eliminado exitosamente' });
    }catch(err){
        res.status(500).send('Error al eliminar el pedido')
    }
}

exports.obtener_id_pedido = async(req, res) =>{
    try{
        const id_pedido = req.params.id
        const pedido_c = await pedido.findById(id_pedido)
        
        if(!pedido_c){
            return res.status(400).json({ error: 'No existe el pedido' });
        }
        const pedidoId = pedido_c._id
        
        res.status(200).json({pedidoId});
    }catch(err){
        res.status(500).send('Error al obtener el pedido')
    }
}

exports.obtenerPedidoPorId = async(req, res) =>{
    try{
        const id_pedido = req.params.id
        const pedido_c = await pedido.findById(id_pedido)
        
        if(!pedido_c){
            return res.status(400).json({ error: 'No existe el pedido' });
        }
        
        res.status(200).json({pedido_c});
    }catch(err){
        res.status(500).send('Error al obtener el pedido')
    }
}