import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css'],
})
export class NewPersonComponent implements OnInit {
  titleForm: string = 'Registre una nueva persona';
  actionBtn: string = 'Agregar';
  datosPersonales = this.formBuilder.group({
    nombre_persona: [null, Validators.required],
    apellido_paterno: [null, Validators.required],
    apellido_materno: [null, Validators.required],
    foto_persona: [null, Validators.required],
    sexo: [null, Validators.required],
    telefono: [null, Validators.required],
    id_tipo_persona: [null, Validators.required],
    fecha_nacimiento: [null, Validators.required],
  });
  datosEspecificos = this.formBuilder.group({
    estatus_acomp: [null, Validators.required],
    id_estado_civil: null,
    id_SGM: [null, Validators.required],
    nivel_escolar: null,
    ultimo_grado: null,
    estudiando: null,
    carrera: null,
    id_empleo: null,
    ocupacion: null,
    seguro_empresa: null,
    posicion_laboral: null,
    salario_fijo_mensual: null,
    id_religion: [null, Validators.required],
    nivel_religion: null,
    curp: null,
    enteradoPlan: null,
    responsable: null,
    estado: null,
    municipio: null,
    localidad: null,
    colonia: null,
    calle: null,
    num_ext: null,
    num_int: null,
    codigo_postal: null,
    id_estado_civil_padres: null,
    casa: null,
    fam_confianza: null,
    numHermanos: null,
    registro_civil: null,
    foto_acta: null,
    hospital: null,
    peso: null,
    estatura: null,
    foto_cartilla: null,
    vacuna_BGC: null,
    vacuna_hepatitis: null,
    vacuna_auditiva: null,
    vacuna_tamiz: null,
    bautizado: null,
  });
  isLinear = false;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  constructor(
    private formBuilder: FormBuilder,
    private api: DataService,
    private dialogRef: MatDialogRef<NewPersonComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  userData = JSON.parse(localStorage.getItem('token') || '{}');

  ngOnInit(): void {

    if (this.editData) {
      this.titleForm = 'Actualizar información de persona';
      this.actionBtn = 'Actualizar';
      this.datosPersonales.controls['nombre_persona'].setValue(
        this.editData.nombre_persona
      );
      this.datosPersonales.controls['apellido_paterno'].setValue(
        this.editData.apellido_paterno
      );
      this.datosPersonales.controls['apellido_materno'].setValue(
        this.editData.apellido_materno
      );
      this.datosPersonales.controls['telefono'].setValue(
        this.editData.telefono
      );
      this.datosPersonales.controls['foto_persona'].setValue(
        this.editData.foto_persona
      );
      this.datosPersonales.controls['sexo'].setValue(this.editData.sexo);
      this.datosPersonales.controls['id_tipo_persona'].setValue(
        this.editData.id_tipo_persona
      );
      this.datosPersonales.controls['fecha_nacimiento'].setValue(
        this.editData.fecha_nacimiento
      );
      this.datosEspecificos.controls['estatus_acomp'].setValue(
        this.editData.estatus_acomp
      );
      this.datosEspecificos.controls['id_estado_civil'].setValue(
        this.editData.id_estado_civil
      );
      this.datosEspecificos.controls['id_SGM'].setValue(this.editData.id_SGM);
      this.datosEspecificos.controls['nivel_escolar'].setValue(
        this.editData.nivel_escolar
      );
      this.datosEspecificos.controls['ultimo_grado'].setValue(
        this.editData.ultimo_grado
      );
      this.datosEspecificos.controls['estudiando'].setValue(
        this.editData.estudiando
      );
      this.datosEspecificos.controls['carrera'].setValue(this.editData.carrera);
      this.datosEspecificos.controls['id_empleo'].setValue(
        this.editData.id_empleo
      );
      this.datosEspecificos.controls['ocupacion'].setValue(
        this.editData.ocupacion
      );
      this.datosEspecificos.controls['seguro_empresa'].setValue(
        this.editData.seguro_empresa
      );
      this.datosEspecificos.controls['posicion_laboral'].setValue(
        this.editData.posicion_laboral
      );
      this.datosEspecificos.controls['salario_fijo_mensual'].setValue(
        this.editData.salario_fijo_mensual
      );
      this.datosEspecificos.controls['id_religion'].setValue(
        this.editData.id_religion
      );
      this.datosEspecificos.controls['nivel_religion'].setValue(
        this.editData.nivel_religion
      );
      this.datosEspecificos.controls['curp'].setValue(this.editData.curp);
      this.datosEspecificos.controls['enteradoPlan'].setValue(
        this.editData.enteradoPlan
      );
      this.datosEspecificos.controls['responsable'].setValue(
        this.editData.responsable
      );
      this.datosEspecificos.controls['estado'].setValue(this.editData.estado);
      this.datosEspecificos.controls['municipio'].setValue(
        this.editData.municipio
      );
      this.datosEspecificos.controls['localidad'].setValue(
        this.editData.localidad
      );
      this.datosEspecificos.controls['colonia'].setValue(this.editData.colonia);
      this.datosEspecificos.controls['calle'].setValue(this.editData.calle);
      this.datosEspecificos.controls['num_ext'].setValue(this.editData.num_ext);
      this.datosEspecificos.controls['num_int'].setValue(this.editData.num_int);
      this.datosEspecificos.controls['codigo_postal'].setValue(
        this.editData.codigo_postal
      );
      this.datosEspecificos.controls['id_estado_civil_padres'].setValue(
        this.editData.id_estado_civil_padres
      );
      this.datosEspecificos.controls['casa'].setValue(this.editData.casa);
      this.datosEspecificos.controls['fam_confianza'].setValue(
        this.editData.fam_confianza
      );
      this.datosEspecificos.controls['numHermanos'].setValue(
        this.editData.numHermanos
      );
      this.datosEspecificos.controls['registro_civil'].setValue(
        this.editData.registro_civil
      );
      this.datosEspecificos.controls['foto_acta'].setValue(
        this.editData.foto_acta
      );
      this.datosEspecificos.controls['hospital'].setValue(
        this.editData.hospital
      );
      this.datosEspecificos.controls['peso'].setValue(this.editData.peso);
      this.datosEspecificos.controls['estatura'].setValue(
        this.editData.estatura
      );
      this.datosEspecificos.controls['foto_cartilla'].setValue(
        this.editData.foto_cartilla
      );
      this.datosEspecificos.controls['vacuna_BGC'].setValue(
        this.editData.vacuna_BGC
      );
      this.datosEspecificos.controls['vacuna_hepatitis'].setValue(
        this.editData.vacuna_hepatitis
      );
      this.datosEspecificos.controls['vacuna_auditiva'].setValue(
        this.editData.vacuna_auditiva
      );
      this.datosEspecificos.controls['vacuna_tamiz'].setValue(
        this.editData.vacuna_tamiz
      );
      this.datosEspecificos.controls['bautizado'].setValue(
        this.editData.bautizado
      );
    }
  }

  addPerson() {
    if (!this.editData) {
      let finalbody = {
        ...this.userData,
        ...this.datosPersonales.value,
        ...this.datosEspecificos.value,
      };
      if(this.datosPersonales.valid && this.datosEspecificos.valid){
        this.api.postPerson(finalbody).subscribe({
          next: (res) => {
            this.Toast.fire({
              icon: 'success',
              title: 'Persona agregada con éxito',
              color: '#FFFFFF',
              background: '#329B22',
              iconColor: '#FFFFFF',
            });
            this.datosPersonales.reset();
            this.datosEspecificos.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            this.Toast.fire({
              icon: 'error',
              title: 'Error al agregar a la persona',
              color: '#FFFFFF',
              background: '#C71717',
              iconColor: '#FFFFFF',
            });
          }
        });
      }else{
        this.Toast.fire({
          icon: 'error',
          title: 'Llene todos los campos por favor',
          color: '#FFFFFF',
          background: '#C71717',
          iconColor: '#FFFFFF'
        })
      }
    } else {
      let finalbody = {
        ...this.userData,
        ...this.datosPersonales.value,
        ...this.datosEspecificos.value,
      };
      if(this.datosPersonales.valid && this.datosEspecificos.valid){
        this.api.putPerson(finalbody, this.editData.id_persona).subscribe({
          next: (res) => {
            this.Toast.fire({
              icon: 'success',
              title: 'Información actualizada con éxito',
              color: '#FFFFFF',
              background: '#329B22',
              iconColor: '#FFFFFF',
            });
            this.datosPersonales.reset();
            this.datosEspecificos.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            this.Toast.fire({
              icon: 'error',
              title: 'Error al agregar a la persona',
              color: '#FFFFFF',
              background: '#C71717',
              iconColor: '#FFFFFF',
            });
          },
        });
      }else{
        this.Toast.fire({
          icon: 'error',
          title: 'Llene todos los campos por favor',
          color: '#FFFFFF',
          background: '#C71717',
          iconColor: '#FFFFFF'
        })
      }
    }
  }

  addInfant() {
    if (!this.editData) {
      let finalbody = {
        ...this.userData,
        ...this.datosPersonales.value,
        ...this.datosEspecificos.value,
      };
      console.log(finalbody);
      if(this.datosPersonales.valid && this.datosEspecificos.valid){
        this.api.postInfant(finalbody).subscribe({
          next: (res) => {
            this.Toast.fire({
              icon: 'success',
              title: 'Persona agregada con éxito',
              color: '#FFFFFF',
              background: '#329B22',
              iconColor: '#FFFFFF',
            });
            this.datosPersonales.reset();
            this.datosEspecificos.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            this.Toast.fire({
              icon: 'error',
              title: 'Error al agregar a la persona',
              color: '#FFFFFF',
              background: '#C71717',
              iconColor: '#FFFFFF',
            });
          }
        });
      }else{
        this.Toast.fire({
          icon: 'error',
          title: 'Llene todos los campos por favor',
          color: '#FFFFFF',
          background: '#C71717',
          iconColor: '#FFFFFF'
        })
      }
    } else {
      let finalbody = {
        ...this.userData,
        ...this.datosPersonales.value,
        ...this.datosEspecificos.value,
      };
      if(this.datosPersonales.valid && this.datosEspecificos.valid){
        this.api.putInfant(finalbody, this.editData.id_persona).subscribe({
          next: (res) => {
            this.Toast.fire({
              icon: 'success',
              title: 'Información actualizada con éxito',
              color: '#FFFFFF',
              background: '#329B22',
              iconColor: '#FFFFFF',
            });
            this.datosPersonales.reset();
            this.datosEspecificos.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            this.Toast.fire({
              icon: 'error',
              title: 'Error al agregar a la persona',
              color: '#FFFFFF',
              background: '#C71717',
              iconColor: '#FFFFFF',
            });
          },
        });
      }else{
        this.Toast.fire({
          icon: 'error',
          title: 'Llene todos los campos por favor',
          color: '#FFFFFF',
          background: '#C71717',
          iconColor: '#FFFFFF'
        })
      }
    }
  }
}
