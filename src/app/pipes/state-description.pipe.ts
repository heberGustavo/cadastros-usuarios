import { Pipe, PipeTransform } from '@angular/core';
import { BrasilianStatesService } from '../services/brasilian-states.service';

@Pipe({
  name: 'stateDescription'
})
export class StateDescriptionPipe implements PipeTransform {

  constructor(
    private readonly _brasilianStateService: BrasilianStatesService
  ){}

  transform(stateId: number): string {
    return this._brasilianStateService.getStateDescription(stateId);
  }

}
