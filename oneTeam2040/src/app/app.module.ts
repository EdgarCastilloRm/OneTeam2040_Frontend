import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-materials/angular-materials.module';
import { LoginModule } from './views/login/login.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './views/home/home.module';
import { EditPersonModule } from './views/edit-person/edit-person.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LoginModule,
    SharedModule,
    HomeModule,
    EditPersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
