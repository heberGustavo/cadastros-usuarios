import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { BrasilianStateListResponse } from 'src/app/types/brasilian-state-list-response';
import { GenresListResponse } from 'src/app/types/genres-list-response';
import { getPasswordStrengthValue } from 'src/app/utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {
  passwordStrengthValue: number = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: BrasilianStateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnInit() { //Executa apenas 1x quando o component é carregado
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) { //Executa quando tem mudança nos valores
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED)
      this.controlProgressBarPassword();
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  private controlProgressBarPassword() {
    this.passwordStrengthValue = getPasswordStrengthValue(this.userSelected.password);
  }

  private setMinAndMaxDate(){
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }
}
