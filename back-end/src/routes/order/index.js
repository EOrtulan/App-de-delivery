const { Router } = require('express');
const { createSale } = require('../../controller/order.controller');

const orderRouter = Router();

orderRouter.post('/', createSale);

module.exports = orderRouter; 