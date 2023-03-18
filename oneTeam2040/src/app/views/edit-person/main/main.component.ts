import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { EditGuideComponent } from 'src/app/shared/edit-guide/edit-guide.component';
import { NewPersonComponent } from 'src/app/shared/new-person/new-person.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  dataSource!: any;
  personIdFromRoute!: Number;
  userType!: number;

  constructor(
    private api: DataService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userType = JSON.parse(localStorage.getItem('usertype') || '{}');
    const routeParams = this.route.snapshot.paramMap;
    this.personIdFromRoute = Number(routeParams.get('id_persona'));
    this.getPersonInfo(this.personIdFromRoute);
  }

  getPersonInfo(personIdFromRoute: Number) {
    if (this.userType != 1) {
      this.api.getDetailedPerson(personIdFromRoute).subscribe({
        next: (res) => {
            this.dataSource = res;
        },
        error: (err) => {
          alert('Error while fetching data.');
        },
      });
    }else{
      this.api.getDetailedInfant(personIdFromRoute).subscribe({
        next: (res) => {
          this.dataSource = res;
        },
        error: (err) => {
          alert('Error while fetching data.');
        },
      });
    }
  }

  openEditPerson(person: any) {
    this.dialog
      .open(NewPersonComponent, {
        restoreFocus: false,
        width: '75%',
        data: person,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          this.getPersonInfo(this.personIdFromRoute);
        }
      });
  }

  openEditPopUp(id : number) {
    this.dialog.open(EditGuideComponent,{
      restoreFocus: false,
      data: {id_persona: id}
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getPersonInfo(this.personIdFromRoute);
      }
    });
  }
}
