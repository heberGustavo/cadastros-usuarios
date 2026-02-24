import { Pipe, PipeTransform } from '@angular/core';
import { GenresService } from '../services/genres.service';

@Pipe({
  name: 'genreDescription'
})
export class GenreDescriptionPipe implements PipeTransform {

  constructor(
    private readonly _genreService: GenresService
  ){}

  transform(genreId: number): string {
    return this._genreService.getGenreDescription(genreId);
  }

}
