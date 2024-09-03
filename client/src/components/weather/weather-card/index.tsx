import "./styles.css";
import { Props } from "./types";
import { format } from "date-fns";
import KeyValueInfo from "../../elements/key-value-info";

const WeatherCard = ({ name, country, hoursForces, error }: Props) => {
  const sliceHoursData = (data: Props["hoursForces"]) => {
    const currentTime = new Date().getHours();

    const start = (currentTime - 3 + 24) % 24;

    const result = [];
    for (let i = 0; i < 5; i++) {
      const hour = (start + i) % 24;
      result.push(data[hour]);
    }

    return result;
  };
  const relevantHours = sliceHoursData(hoursForces);

  const currentHour = relevantHours[3];

  if (!name || !country || !hoursForces.length)
    return (
      <div className="weather-card-wrapper">
        <div className="weather-card-wrapper-error-wrapper">
          <p className="weather-card-wrapper-error-text">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="weather-card-wrapper">
      <div className="weather-card-wrapper-content">
        <div className="weather-card-header">
          <div className="weather-card-header-city-country-wrapper">
            <p className="weather-card-header-city-name">{name}</p>
            <p className="weather-card-header-country-name">{country}</p>
          </div>
          <p className="weather-card-header-date-time">{format(currentHour.time, "dd/MM/yy") + " at " + format(currentHour.time, "HH:mm")}</p>
        </div>
        <div className="weather-card-center">
          <p className="weather-card-center-temp">
            {Math.round(currentHour.temp.value)}
            {currentHour.temp.unit}
          </p>
          <p className="weather-card-center-temp-description">{currentHour.condition.value}</p>
        </div>
        <div className="weather-card-footer">
          <div className="weather-card-footer-mete-data">
            <KeyValueInfo
              keyText="precipitation"
              value={Math.round(currentHour.precipitation.value) + " " + currentHour.precipitation.unit}
              size="l"
            />
            <KeyValueInfo keyText="humidity" value={Math.round(currentHour.humidity.value) + currentHour.humidity.unit} size="l" />
            <KeyValueInfo keyText="wind" value={Math.round(currentHour.wind.value) + currentHour.wind.unit} size="l" />
          </div>
          <div className="weather-card-footer-hours-data">
            {relevantHours.map((hour) => (
              <KeyValueInfo
                key={hour.time.toString()}
                keyText={format(hour.time, "HH:00")}
                value={Math.round(hour.temp.value) + hour.temp.unit}
                size="m"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
