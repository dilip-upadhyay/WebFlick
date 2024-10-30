import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-content',
  standalone: true,
  imports: [],
  templateUrl: './weather-content.component.html',
  styleUrl: './weather-content.component.css'
})
export class WeatherContentComponent {
  protected lastUpdateAt: Date = new Date();
  protected temperature = 21;

  updateData() {
    console.log('performs request to server, etc...')
    this.temperature = 19;
    this.lastUpdateAt = new Date();
  }

}
