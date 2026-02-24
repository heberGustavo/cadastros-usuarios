import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrasilianStatesService } from './services/brasilian-states.service';
import { UsersListResponse } from './types/users-list-response';
import { GenresListResponse } from './types/genres-list-response';
import { BrasilianStateListResponse } from './types/brasilian-state-list-response';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser; //Guarda a copia do usuário
  userSelectedIndex: number | undefined;

  usersList: UsersListResponse = []; //Guarda lista original dos usuários
  genresList: GenresListResponse = [];
  brasilianStatesList: BrasilianStateListResponse = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brasilianStatesService: BrasilianStatesService,
    private readonly _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound); //clonando o objeto
    }
  }

  onFormSubmit(): void {
    if(this.userSelectedIndex === undefined) return;

    const originalUser = this.usersList[this.userSelectedIndex];

    this.openBeforeAndAfterDialog(originalUser, this.userSelected);
  }
  
  private openBeforeAndAfterDialog(originalUser: IUser, updatedUser: IUser) {
    this._matDialog.open(UserBeforeAndAfterDialogComponent, {
      minWidth: '70%',
      data: {
        originalUser,
        updatedUser
      }
    });
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  private getGenres() {
    return this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    })
  }

  private getStates() {
    return this._brasilianStatesService.getStates().subscribe((brasilianStatesListResponse) => {
      this.brasilianStatesList = brasilianStatesListResponse;
    })
  }
}
