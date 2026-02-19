import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularMaterialModule } from "../angular-material.module";
import { DirectivesModules } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        BrowserModule,
        AngularMaterialModule,
        DirectivesModules,
        PipesModule,
    ],
    exports: [],
})
export class ComponentsModule {

}