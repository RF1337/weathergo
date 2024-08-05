import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ApixuService } from "../apixu.service";
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})

export class WeatherComponent {
  weatherData: any;
  
  locationForm = this.formBuilder.group({
    location: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  onSubmit() {
    // Access the form value here using the FormGroup
    const locationValue = this.locationForm.get('location')?.value;

    // Check if locationValue is defined and of the correct type
    if (typeof locationValue === 'string') {
      this.apixuService.getWeather(locationValue)
        .subscribe(data => 
          {this.weatherData = data;
            console.log('Weather Data:', this.weatherData)
          });
    } else {
      console.error('Location value is not a string');
    }
  }
}