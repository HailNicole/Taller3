//const { Router } = require('express');
const express = require('express')
const router = express.Router()
const platoController = require('../controllers/platosController')
const pedidoController = require('../controllers/pedidosController')
const comentarioController = require('../controllers/comentariosController')

router.get('/platos', platoController.obtenerPlatos);
router.get('/obtener_id_plato/:id', platoController.obtener_id_plato);
router.get('/obtener_plato_por_id/:id', platoController.obtener_plato_por_id);
router.post('/agregar-plato', platoController.crearPlato);

router.get('/pedidos', pedidoController.obtenerPedidos);
router.get('/obtener_pedido_por_id/:id', pedidoController.obtenerPedidoPorId);
router.get('/obtener_id_pedido/:id', pedidoController.obtener_id_pedido);
router.post('/agregar-pedido', pedidoController.crearPedido);
router.put('/editar-pedido/:id', pedidoController.editarPedido);
router.delete('/borrar-pedido/:id', pedidoController.eliminarPedido);

router.post('/agregar-comentario', comentarioController.agregarComentario);

module.exports = router;