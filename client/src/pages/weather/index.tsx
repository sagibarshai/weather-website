import "./styles.css";
import { useState } from "react";
import TextInput from "../../components/elements/inputs/input-with-button";
import Logo from "../../components/logo";
import WeatherCard from "../../components/weather/weather-card";
import { WeatherCityData } from "./types";
import { appAxios } from "../../axios";
import { format } from "date-fns";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<{ value: WeatherCityData | null; loading?: boolean; error?: string }>({
    value: null,
    loading: false,
  });
  const [city, setCity] = useState<{ value: string; valid: boolean; error: string | undefined; displayError: boolean }>({
    error: "City name must be between 2 to 25 characters",
    valid: false,
    value: "",
    displayError: false,
  });

  const cityChangeHandler = (value: string) => setCity({ ...city, valid: value.length > 1 && value.length < 26, value, displayError: true });

  const fetchData = async () => {
    try {
      setWeatherData({ value: null, loading: true });

      const response = await appAxios.get(`/weather/${city.value}`);
      const axiosData = response.data;
      const data = axiosData.data;

      setWeatherData({ value: data, loading: false });
    } catch (err) {
      setWeatherData({ value: null, error: `Cannot find data for "${city.value}"`, loading: false });
      console.error("Error", err);
    }
  };

  return (
    <div className="weather-wrapper">
      <div className="weather-left-col">
        <Logo />
        <div className="weather-left-col-content">
          <div className="weather-left-col-center">
            <p className="weather-left-col-content-text">Use our weather app to see the weather around the world</p>
            <TextInput
              input={{
                label: "City name",
                onChange: cityChangeHandler,
                value: city.value,
                placeholder: "London...",
                error: city.displayError && !city.valid ? city.error : undefined,
              }}
              button={{ onClick: fetchData, text: "Check", disabled: !city.valid, loading: weatherData.loading }}
            />
          </div>
          {weatherData.value ? (
            <div className="weather-left-col-footer">
              <div className="weather-left-col-line">
                <p>latitude {weatherData.value.lat} </p>
                <p>longitude {weatherData.value.lon}</p>
              </div>
              <div className="weather-left-col-line">
                <p>accurate to {format(weatherData.value.timestamp, "dd/MM/yy") + " at " + format(weatherData.value.timestamp, "HH:mm")}</p>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="weather-right-col">
        <div className="weather-card-content-wrapper">
          <WeatherCard
            error={weatherData.error}
            name={weatherData.value?.name || ""}
            country={weatherData.value?.country || ""}
            hoursForces={weatherData.value?.hoursForces || []}
          />
        </div>
      </div>
    </div>
  );
};
export default Weather;
