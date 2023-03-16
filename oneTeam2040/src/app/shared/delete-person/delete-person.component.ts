import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  disabled = false;
  userType!: Number;

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private api: DataService, private dialogRef: MatDialogRef<DeletePersonComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userType = JSON.parse(localStorage.getItem('usertype') || '{}');
  }

  deletePersona() {
    if(this.userType == 1){
      this.api.deleteInfant(this.data.id_persona)
      .subscribe({
        next: (res) => {
          this.Toast.fire({
            icon: 'success',
            title: 'Persona borrada con éxito',
            color: '#FFFFFF',
            background: '#329B22',
            iconColor: '#FFFFFF'
          })
          this.dialogRef.close('save');
        },
        error: (err) =>{
          this.Toast.fire({
            icon: 'error',
            title: 'Error al borrar a la persona',
            color: '#FFFFFF',
            background: '#C71717',
            iconColor: '#FFFFFF'
          })
        }
      })
    }else{
      this.api.deletePerson(this.data.id_persona)
      .subscribe({
        next: (res) => {
          this.Toast.fire({
            icon: 'success',
            title: 'Persona borrada con éxito',
            color: '#FFFFFF',
            background: '#329B22',
            iconColor: '#FFFFFF'
          })
          this.dialogRef.close('save');
        },
        error: (err) =>{
          this.Toast.fire({
            icon: 'error',
            title: 'Error al borrar a la persona',
            color: '#FFFFFF',
            background: '#C71717',
            iconColor: '#FFFFFF'
          })
        }
      })
    }
  }
}
