import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { BrasilianStateListResponse } from 'src/app/types/brasilian-state-list-response';
import { GenresListResponse } from 'src/app/types/genres-list-response';
import { convertDateObjToPtBrDate } from 'src/app/utils/convert-date-obj-to-pt-br-date';
import { convertPtBrDateToDateObj } from 'src/app/utils/convert-pt-br-date-to-date-obj';
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
  dateValue: Date | null = null;
  filteredGenresList: GenresListResponse = [];

  displayedColums: string[] = ['title', 'band', 'genre', 'favorite'];

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: BrasilianStateListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  @Output('onFormSubmit') onFormSubmitEmmit = new EventEmitter<void>();

  constructor(
    private readonly _el: ElementRef //Para acessar a instancia HTML
  ) {}

  ngOnInit() { //Executa apenas 1x quando o component é carregado
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) { //Executa quando tem mudança nos valores
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED) {
      this.controlProgressBarPassword();
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
      this.filteredGenresList = this.genresList;
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) return;

    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);
  }

  displayFnGenre(genreId: number): string {
    const genreSelected = this.genresList.find(x => x.id === genreId);
    return genreSelected ? genreSelected.description : '';
  }

  filterGenres(text: string) {
    if (typeof text === 'number') return;

    const searchTerm = text.toLocaleLowerCase();

    this.filteredGenresList = this.genresList.filter(
      genre => genre.description.toLocaleLowerCase().includes(searchTerm)
    )
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some(music => music.isFavorite === true);
  }

  onFormSubmit(form: NgForm) {
    
    if(form.invalid) {
      this.focusOnInvalidControl(form);
      
      return;
    }

    this.onFormSubmitEmmit.emit();
  }

  private focusOnInvalidControl(form: NgForm) {
    for(const control of Object.keys(form.controls)){
      if(form.controls[control].invalid){
        const invalidControl: HTMLElement = this._el.nativeElement.querySelector(`[name=${control}]`);
        invalidControl.focus();

        break;
      }
    }
  }

  private controlProgressBarPassword() {
    this.passwordStrengthValue = getPasswordStrengthValue(this.userSelected.password);
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }
}
