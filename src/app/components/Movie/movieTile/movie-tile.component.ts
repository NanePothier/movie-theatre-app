import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  standalone: true,
  imports: [],
  templateUrl: './movie-tile.component.html',
  styleUrl: './movie-tile.component.css',
})
export class MovieTileComponent {
  @Input({ required: true }) movieId!: string;
  @Input({ required: true }) movieTitle!: string;
  @Input() isActive: boolean = false;

  @Output() selectTile = new EventEmitter<string>();

  onSelectTile() {
    this.selectTile.emit(this.movieId);
  }
}
