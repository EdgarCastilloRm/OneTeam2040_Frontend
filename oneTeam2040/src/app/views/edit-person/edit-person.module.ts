import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { MainComponent } from './main/main.component';
import { AngularMaterialModule } from 'src/app/angular-materials/angular-materials.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    EditPersonComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
    GoogleMapsModule
  ]
})
export class EditPersonModule { }
