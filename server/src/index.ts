import "dotenv/config";
import express from "express";
import cors from "cors";
import { weatherRouter } from "./routes/weather";
import { config } from "./config";
import { errorMiddleware } from "./middlewares/errors";
import { notFoundMiddleware } from "./middlewares/errors/not-found";

const app = express();

app.use(cors({}));

if (!process.env.WEATHER_API_KEY) throw new Error(`WEATHER_API_KEY inside .env file must be defined`);

app.use("/api", weatherRouter);

app.use("/*", notFoundMiddleware);

app.use(errorMiddleware);

app.listen(config.PORT, () => console.log(`Server listen on port ${config.PORT}`));
