import { Component } from '@angular/core';
import { ClimateService } from './climate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  constructor(private climateService: ClimateService) { }

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
    // this.humidity=
    this.showweather=true;
  }

   getCity(city) {
    this.climateService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
      this.setWeatherData(data); 
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
  ngOnInit(): void {
    this.climateService.sendGetRequest().subscribe(data =>{
      console.log(data);
      this.WeatherD = data;
    })
  } 
}