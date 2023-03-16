import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoginComponent } from './main-login/main-login.component';
import { AngularMaterialModule } from 'src/app/angular-materials/angular-materials.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    MainLoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class LoginModule { }
