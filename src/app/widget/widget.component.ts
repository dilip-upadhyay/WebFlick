import { Component, input } from '@angular/core';
import { WeatherContentComponent } from "../weather-content/weather-content.component";

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [WeatherContentComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  title = input("__Widget__");
  description = input("__Widget description__");
}
