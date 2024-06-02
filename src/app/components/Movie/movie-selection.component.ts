import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { PanelComponent } from '../UI/panel/panel.component';
import { MovieInfoComponent } from './movieInfo/movie-info.component';
import { ButtonComponent } from '../UI/button/button.component';
import { movieData } from '../../mock-data/Movies';

enum SelectionStates {
  INFO = 'INFO',
  TIME = 'TIME',
  SEATS = 'SEATS',
}

@Component({
  selector: 'app-movie-selection',
  standalone: true,
  imports: [NgIf, PanelComponent, MovieInfoComponent, ButtonComponent],
  templateUrl: './movie-selection.component.html',
  styleUrl: './movie-selection.component.css',
})
export class MovieSelectionComponent {
  @Input() selectedMovieId = '';

  selectionStates = SelectionStates;
  selectionState = SelectionStates.INFO;

  nextBtnClasses = 'btn-wrapper';

  handleNext() {
    if (this.selectionState === SelectionStates.INFO) {
      this.selectionState = SelectionStates.TIME;
    }
  }

  get selectedMovieData() {
    return movieData.find((movie) => movie.id === this.selectedMovieId);
  }
}
