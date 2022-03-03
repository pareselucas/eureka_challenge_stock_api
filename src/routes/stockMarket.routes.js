import { Router } from "express";
const router = Router();

import {getAlphaApi} from "../controllers/stockMarket.controller";
import { authJwt } from "../middlewares";
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})
router.get(
  "/",
  [limiter, authJwt.verifyToken, authJwt.isAdmin] ,
  getAlphaApi
);


export default router;
