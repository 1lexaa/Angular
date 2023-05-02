import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component
({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent 
{
  title: string;
  movies: any;
  showFullPlot = false;

  constructor(private movieService: MovieService) {}

  getMovieInfo() 
  {
    this.movieService.getMovieInfo(this.title).subscribe((data) => { this.movies = data; });
  }
  
  togglePlot() { this.showFullPlot = !this.showFullPlot; }
}