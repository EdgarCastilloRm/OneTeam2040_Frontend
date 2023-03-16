import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Options } from 'src/app/models/infoUser';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-guide',
  templateUrl: './edit-guide.component.html',
  styleUrls: ['./edit-guide.component.css']
})
export class EditGuideComponent implements OnInit {
  form !: FormGroup;
  options! : Options[];

  optionsControl = new FormControl();
  selected = "";

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private _dataService : DataService, private dialogRef : MatDialogRef<EditGuideComponent>) { 
    this._dataService.getAllUsers()
    .subscribe({
      next: (res) =>{
        this.options = res;
      },
      error: (err)=>{
        console.log(err);
      }
    })
    this.form = new FormGroup({
      id_usr: this.optionsControl
    });
  }

  ngOnInit(): void {
  }

  editGuide() {
    if(this.form.valid){
      this._dataService.updateGuide(this.data.id_persona, this.form.value)
      .subscribe({
        next: (res) =>{
          this.Toast.fire({
            icon: 'success',
            title: 'Guía actualizado con éxito',
            color: '#FFFFFF',
            background: '#329B22',
            iconColor: '#FFFFFF'
          })
          this.form.reset();
          this.dialogRef.close('save');
        },
        error: (err)=>{
          this.Toast.fire({
            icon: 'error',
            title: 'Error actualizando guía',
            color: '#FFFFFF',
            background: '#C71717',
            iconColor: '#FFFFFF'
          })
        }
      })
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'Por favor seleccione una opción',
        color: '#FFFFFF',
        background: '#C71717',
        iconColor: '#FFFFFF'
      })
    }
  }
}