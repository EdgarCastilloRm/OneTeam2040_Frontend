import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/infoUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){}

  userData = JSON.parse(localStorage.getItem('token') || '{}');
  
  ngOnInit(): void {
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
