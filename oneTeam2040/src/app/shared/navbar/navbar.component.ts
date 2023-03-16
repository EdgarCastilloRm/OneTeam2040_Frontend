import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/infoUser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router, private dataService:DataService){}

  userData = this.dataService.getJsonValue('token');
  
  ngOnInit(): void {
  }

  signOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usertype');
    this.router.navigate(['']);
  }
}
