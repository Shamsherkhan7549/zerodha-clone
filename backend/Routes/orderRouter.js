import express from 'express';
import orderController from '../Controllers/orderController.js';

const orderRoute = express.Router();

orderRoute.post('/newOrders', orderController.orderAddController);
 
 orderRoute.get('/allOrders', orderController.orderViewController )

 export default orderRoute;