import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() title: string = '';
  @Input() imagePoster: string = '';
  @Input() score: number = 0;
}
