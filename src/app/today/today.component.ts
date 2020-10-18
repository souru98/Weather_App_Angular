import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {
  currentLat: number;
  currentLon: number;
  currentData: any;
  nextData: any;
  hourlyData: any;
  currentDate = new Date();
  cityList: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentLocation(), this.getCityList();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat = position.coords.latitude;
        this.currentLon = position.coords.longitude;

        // console.log(this.currentLat);
        // console.log(this.currentLon);

        this.weatherService
          .getWeatherDataByLocation(this.currentLat, this.currentLon)
          .subscribe((res) => {
            this.currentData = res;

            // console.log(this.currentData.weather[0].icon);
          });

        this.weatherService
          .getForecastDataByLocation(this.currentLat, this.currentLon)
          .subscribe((res) => {
            this.nextData = res;
            this.hourlyData = this.nextData.list;

            // console.log(this.hourlyData);
          });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  getCity(city) {
    this.weatherService.getWeatherDataByCity(city).subscribe((res) => {
      this.currentData = res;
    });

    // console.log(this.weatherData);

    this.weatherService.getForecastDataByCity(city).subscribe((res) => {
      this.nextData = res;
      this.hourlyData = this.nextData.list;

      console.log(this.hourlyData);
    });
  }

  getCityList() {
    this.weatherService.getCityList().subscribe((res) => {
      this.cityList = res;

      console.log(this.cityList);
    });
  }
}
