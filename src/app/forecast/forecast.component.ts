import { Component, OnInit } from '@angular/core';
import { ClimateService } from '../climate.service';
// import * as $ from 'jquery';
// import { url } from 'inspector';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  WeatherData: any;
  lat;
  lon;
  weather: any;
  isShowDiv = true;
  hello: string = "I am INC";
  bye: string = "I am DEC";
  title = 'weather';
  isNight:boolean=true;
  isDay:boolean=false;
  isCloud:boolean=false;
  temp_celcius:any;
  temp_min:any;
  temp_max:any;
  name:any;
  country:string;
  humidity:any;
  showweather:boolean=false;

setWeatherData(data) {
    this.weather = data;
    let sunsetTime = new Date(this.weather.sys.sunset * 1000);
    this.weather.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.isNight = (currentDate.getTime() > sunsetTime.getTime());
    this.isCloud = (currentDate.getTime() > sunsetTime.getTime());
    this.temp_celcius = ((5/9) * (this.weather.main.temp - 32)).toFixed(0);
    this.temp_min = ((5/9) * (this.weather.main.temp_min - 32)).toFixed(0);
    this.temp_max = ((5/9) * (this.weather.main.temp_max - 32)).toFixed(0);
    this.showweather=true;
    this.climateService.weatherdetails=data;
  }

   getCity(city):any {
    this.climateService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
      this.setWeatherData(data);
      return this.weather; 
    })
  }

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  clickMe(operations: string) {
   let x = operations == 'INC' ? this.hello : this.bye;
    alert(operations);
    alert(x);
  }
 
  WeatherD: any;

  constructor(private climateService: ClimateService) { }

  ngOnInit(): void {
  this.climateService.sendGetRequest().subscribe(data =>{
    // console.log(data);
    this.WeatherD = data;
  }) 

  }
  serve(name){
    this.climateService.cityname=name;
    // this.climateService.weatherdetails=this.getCity(this.climateService.cityname);
    console.log(this.climateService.cityname);
  }

}
