import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import{MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const MatUi=[
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule,

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatUi
  ],
  exports:[
    MatUi
  ]
})
export class UiMatModule { }
