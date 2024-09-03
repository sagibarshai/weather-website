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
