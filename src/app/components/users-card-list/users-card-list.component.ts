import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from 'src/app/types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent {
  @Input({ required: true }) usersList: UsersListResponse = [];

  @Output('onUserSelected') onUserSelectedEmmit = new EventEmitter<number>();

  onUserSelected(userIndex: number) {
    this.onUserSelectedEmmit.emit(userIndex);
  }
}
