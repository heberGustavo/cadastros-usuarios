import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  usersList: any = [];
  genresList: any = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
  ){}

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
  }

  private getUsers(){
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  private getGenres(){
    return this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    })
  }
}
