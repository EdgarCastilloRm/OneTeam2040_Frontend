import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AngularMaterialModule } from 'src/app/angular-materials/angular-materials.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TableComponent,
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
