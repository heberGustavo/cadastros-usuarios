import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatDividerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatProgressBarModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatDividerModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatProgressBarModule,
    ],
})
export class AngularMaterialModule { }