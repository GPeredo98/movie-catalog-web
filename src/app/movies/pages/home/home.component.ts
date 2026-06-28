import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";

@Component({
    selector: 'app-home',
    imports: [MovieCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  movieList: any[] = [];

  constructor(
    private _router: Router,
    private _moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this._getMovies();
  }

  public addMovie(): void {
    this._moviesService.addMovie({});
  }

  private _getMovies(): void {
    this._moviesService.getMovies().subscribe((res:any) => {
      this.movieList = res;
    });
  }
}
