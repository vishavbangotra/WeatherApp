import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weatherService.getWeather(this.city)
      .subscribe(data => {
        this.weatherData = data;
      });
  }
}