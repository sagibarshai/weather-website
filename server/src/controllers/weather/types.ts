import { Request, Response } from "express";

export interface WeatherCityRequest extends Request {
  params: {
    city: string;
  };
}

export interface WeatherCityDataResponse {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    last_updated: Date;
  };

  forecast: {
    forecastday: {
      hour: {
        time: Date;
        condition: {
          text: string;
        };
        wind_kph: number;
        temp_c: number;
        precip_mm: number;

        humidity: number;
      }[];
    }[];
  };
}

export interface WeatherCityData {
  lat: number;
  lon: number;
  name: string;
  country: string;
  timestamp: Date;

  hoursForces: {
    time: Date;
    condition: {
      value: string;
    };
    temp: {
      value: number;
      unit: string;
    };
    precipitation: {
      value: number;
      unit: string;
    };
    humidity: {
      value: number;
      unit: string;
    };
    wind: {
      value: number;
      unit: string;
    };
  }[];
}
