import { Request, Response, Router } from "express";
import { param } from "express-validator";
import { validateRequestMiddleware } from "../../middlewares/validate-request";
import { weatherCityController } from "../../controllers/weather";

const router = Router();

router.get(
  "/weather/:city",
  param("city").isLength({ min: 2, max: 25 }).withMessage("city name must be between 2 to 25 characters"),
  validateRequestMiddleware,
  weatherCityController
);

export { router as weatherRouter };
