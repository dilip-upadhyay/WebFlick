import { Component, inject, TemplateRef, Type, viewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
import { NgComponentOutlet } from '@angular/common';
import { WeatherContentComponent } from './weather-content/weather-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet, WeatherContentComponent, WidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  vcr = inject(ViewContainerRef);
  contentTpl = viewChild<TemplateRef<unknown>>('contentTpl')
  protected content: Node[][] = [];
  protected component: Type<WidgetComponent> | null = null;
  protected componentInputs = {
    title: 'Weather',
    description: 'Currently in Vienna:'
  }
   
  createComponent() {
    this.content = [
      this.vcr.createEmbeddedView(this.contentTpl()!).rootNodes
    ]
    this.component = WidgetComponent;
  }
  destroyComponent() {
    this.component = null;
  }
}