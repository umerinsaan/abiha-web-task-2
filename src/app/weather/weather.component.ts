import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city)
        .subscribe(data => {
          this.weatherData = data;
          console.log(this.weatherData);
          this.weatherData.main.temp = Math.round((this.weatherData.main.temp - 273.15) * 100) / 100;
        });
    }
  }
}
