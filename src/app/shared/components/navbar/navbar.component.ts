import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { MoviesService } from 'src/app/movies/services/movies.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public search: string = '';
  public movieList: any[] = [];
  public movieListFiltered: any[] = [];

  constructor(
    private _router: Router,
    private _moviesService: MoviesService
  ) {}

  public logout(): void {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  public filterMovies(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.movieList as any[]).length; i++) {
        let country = (this.movieList as any[])[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }

    this.movieListFiltered = filtered;
}

  private _getMovies(): void {
    this._moviesService.getMovies().subscribe((res:any) => {
      this.movieList = res;
    });
  }
}
