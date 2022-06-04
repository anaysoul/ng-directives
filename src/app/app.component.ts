import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
    },
    {
      title: 'At the Volcano',
      url: 'https://images.unsplash.com/photo-1580250642511-1660fe42ad58',
    },
    {
      title: 'At the River',
      url: 'https://images.unsplash.com/photo-1536048810607-3dc7f86981cb',
    },
    {
      title: 'At the Grassland',
      url: 'https://images.unsplash.com/photo-1562758619-78207a23a6e0',
    },
    {
      title: 'At the Jungle',
      url: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
    },
    {
      title: 'At the Volcano',
      url: 'https://images.unsplash.com/photo-1580250642511-1660fe42ad58',
    },
    {
      title: 'At the River',
      url: 'https://images.unsplash.com/photo-1536048810607-3dc7f86981cb',
    },
    {
      title: 'At the Grassland',
      url: 'https://images.unsplash.com/photo-1562758619-78207a23a6e0',
    },
    {
      title: 'At the Jungle',
      url: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02',
    },
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
    {
      title: 'At the Forest',
      url: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    },
    {
      title: 'At the Mountain',
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
    },
    {
      title: 'At the Volcano',
      url: 'https://images.unsplash.com/photo-1580250642511-1660fe42ad58',
    },
    {
      title: 'At the River',
      url: 'https://images.unsplash.com/photo-1536048810607-3dc7f86981cb',
    },
    {
      title: 'At the Grassland',
      url: 'https://images.unsplash.com/photo-1562758619-78207a23a6e0',
    },
    {
      title: 'At the Jungle',
      url: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02',
    },
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
