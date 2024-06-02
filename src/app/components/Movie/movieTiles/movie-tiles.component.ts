import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { MovieTileComponent } from '../movieTile/movie-tile.component';
import { movieData } from '../../../mock-data/Movies';

@Component({
  selector: 'app-movie-tiles',
  standalone: true,
  imports: [MovieTileComponent, NgFor],
  templateUrl: './movie-tiles.component.html',
  styleUrl: './movie-tiles.component.css',
})
export class MovieTilesComponent {
  @Output() selectTile = new EventEmitter<string>();

  movies = movieData;

  handleTileSelected(movieId: string) {
    console.log('selected id ' + movieId);
    this.selectTile.emit(movieId);
  }
}
