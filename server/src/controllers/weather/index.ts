import { NextFunction, Response } from "express";
import { WeatherCityData, WeatherCityDataResponse, WeatherCityRequest } from "./types";
import axios from "axios";

export const weatherCityController = async (req: WeatherCityRequest, res: Response, next: NextFunction) => {
  const { city } = req.params;
  try {
    const response = await axios.get(` http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}`);
    const data: WeatherCityDataResponse = response.data;

    const clientData: WeatherCityData = {
      country: data.location.country,
      lat: data.location.lat,
      lon: data.location.lon,
      name: data.location.name,
      timestamp: data.current.last_updated,
      hoursForces: data.forecast.forecastday[0].hour.map((h) => ({
        time: h.time,
        condition: { value: h.condition.text },
        humidity: { value: h.humidity, unit: "%" },
        precipitation: { value: h.precip_mm, unit: "mm" },
        temp: { value: h.temp_c, unit: "°" },
        wind: { unit: "km/h", value: h.wind_kph },
      })),
    };

    res.status(200).json({ data: clientData });
  } catch (err) {
    console.log("error ", err);
    next(err);
  }
};
