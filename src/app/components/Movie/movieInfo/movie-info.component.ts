import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css',
})
export class MovieInfoComponent {
  @Input({ required: true }) movie?: Movie;
}
