import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: string){
    // only use if cors blocks API call ... const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const apiKey = '849e90bb396a6602fce392577bd456cb'
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;
    return this.http.get(`${apiUrl}`);
  }
}
// API key: 849e90bb396a6602fce392577bd456cb