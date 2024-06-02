import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/UI/header/header.component';
import { MovieTilesComponent } from './components/Movie/movieTiles/movie-tiles.component';
import { MovieSelectionComponent } from './components/Movie/movie-selection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MovieTilesComponent,
    MovieSelectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedMovieId = '';

  handleTileSelected(movieId: string) {
    this.selectedMovieId = movieId;
  }
}
