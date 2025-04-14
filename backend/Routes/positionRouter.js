import express from 'express';
import positionController from '../Controllers/positionController.js';


const positionRoute = express.Router();


positionRoute.get('/allPositions', positionController);

export default  positionRoute;