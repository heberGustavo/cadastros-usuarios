import { NgModule } from "@angular/core";
import { GenreDescriptionPipe } from './genre-description.pipe';
import { StateDescriptionPipe } from './state-description.pipe';

@NgModule({
  declarations: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
  ],
  exports: [
    GenreDescriptionPipe,
    StateDescriptionPipe,
  ],
})
export class PipesModule {

}