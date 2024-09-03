import { WeatherCityData } from "../../../pages/weather/types";

export interface Props extends Omit<WeatherCityData, "lat" | "lon" | "timestamp"> {
  error?: string;
}
