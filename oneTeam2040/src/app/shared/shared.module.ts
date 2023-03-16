import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from '../angular-materials/angular-materials.module';
import { RouterModule } from '@angular/router';
import { NewPersonComponent } from './new-person/new-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { EditGuideComponent } from './edit-guide/edit-guide.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    NavbarComponent,
    NewPersonComponent,
    DeletePersonComponent,
    EditGuideComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  exports: [
    NavbarComponent,
    NewPersonComponent,
    DeletePersonComponent,
    EditGuideComponent
  ]
})
export class SharedModule { }
