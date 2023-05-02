export interface IWeatherResponse {
    location: {
      name: string;
      region: string;
      country: string;
      lat: string;
      lon: string;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
    current: {
      temperature: number;
      weather_descriptions: string[];
      weather_icons: string[];
    };
  }
  