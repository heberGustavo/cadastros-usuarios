import { NgModule } from "@angular/core";
import { GenreDescriptionPipe } from './genre-description.pipe';

@NgModule({
  declarations: [
    GenreDescriptionPipe,
  ],
  exports: [
    GenreDescriptionPipe,
  ],
})
export class PipesModule {

}