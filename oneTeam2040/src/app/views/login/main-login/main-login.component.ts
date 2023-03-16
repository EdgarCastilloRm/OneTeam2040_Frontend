import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/infoUser';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent {
  loginForm !: FormGroup;
  basicInfo!: UserInfo;
  loggedIn: boolean = false; 
  Toast:any;

  constructor(private dataService: DataService, private router: Router ){}

  ngOnInit(): void {
    this.loginForm =  new FormGroup({
      email: new FormControl(''),
      psw: new FormControl('')
    });

    this.Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  }

  login(){
    this.dataService.getUserData(this.loginForm.value).subscribe({
      next: (response) => {
        if(response.length != 0){
          this.basicInfo ={
            id_usr: response[0].id_usr,
            nombre_usr: response[0].nombre_usr,
            email: response[0].email,
            region: response[0].region
          }
          this.Toast.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            color: '#FFFFFF',
            background: '#329B22',
            iconColor: '#FFFFFF'
          })
          this.router.navigate(['home']);
          localStorage.setItem('token', JSON.stringify(response[0]));
        }
        else if (response.length == 0){
          this.Toast.fire({
            icon: 'error',
            title: 'Ingrese las credenciales correctas',
            color: '#FFFFFF',
            background: '#C71717',
            iconColor: '#FFFFFF'
          })
        }
      },
      error: (err) => {
        this.Toast.fire({
          icon: 'error',
          title: 'Error en el servidor. Contacte a un administrador',
          color: '#FFFFFF',
          background: '#C71717',
          iconColor: '#FFFFFF'
        })
      }
    })
  }
}