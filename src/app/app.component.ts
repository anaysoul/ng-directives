import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://unsplash.com/photos/Ox_6M68VqfQ',
    },
    {
      title: 'At the Forest',
      url: 'https://unsplash.com/photos/-heLWtuAN3c',
    },
    {
      title: 'At the Mountain',
      url: 'https://unsplash.com/photos/9wg5jCEPBsw',
    },
    {
      title: 'At the Volcano',
      url: 'https://unsplash.com/photos/tLxGw_ITs7k',
    },
    {
      title: 'At the River',
      url: 'https://unsplash.com/photos/M1YdS0g8SRA',
    },
    {
      title: 'At the Grassland',
      url: 'https://unsplash.com/photos/bNOh-Y-ECSg',
    },
    {
      title: 'At the Jungle',
      url: 'https://unsplash.com/photos/qLW70Aoo8BE',
    },
  ];
}
