import express from 'express';
import holdingController from '../Controllers/holdingController.js';

const holdingRoute = express.Router();

holdingRoute.get('/allHoldings', holdingController);

export default holdingRoute;