const Router = require('express')
const OrderController = require('../controllers/orderController')
const router = new Router()

router.post('/', OrderController.createOrder)
router.get('/', OrderController.getAllOrder)
router.get('/paymant', OrderController.getPaymantOrder)
router.get('/send', OrderController.getSendOrder)
router.get('/:id', OrderController.getOneOrder)
router.put('/', OrderController.updateOneOrder)

module.exports = router