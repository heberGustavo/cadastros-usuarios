import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { BrasilianStateListResponse } from 'src/app/types/brasilian-state-list-response';
import { GenresListResponse } from 'src/app/types/genres-list-response';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: BrasilianStateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnInit() { //Executa apenas 1x quando o component é carregado
  }

  ngOnChanges(changes: SimpleChanges) { //Executa quando tem mudança nos valores
  }
}
