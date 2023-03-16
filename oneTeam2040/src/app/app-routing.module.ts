import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerGuard } from './guards/inner.guard';
import { LoginGuard } from './guards/login.guard';
import { EditPersonComponent } from './views/edit-person/edit-person/edit-person.component';
import { MainHomeComponent } from './views/home/main-home/main-home.component';
import { MainLoginComponent } from './views/login/main-login/main-login.component';

const routes: Routes = [
  { path: '', component: MainLoginComponent, canActivate:[LoginGuard]},
  { path: 'login', component: MainLoginComponent, canActivate:[LoginGuard] },
  { path: 'home', component: MainHomeComponent, canActivate: [InnerGuard]},
  {path: 'edit/:id_persona', component:EditPersonComponent, canActivate: [InnerGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
