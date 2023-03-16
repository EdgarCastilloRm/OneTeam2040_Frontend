import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { TableData } from 'src/app/models/tableData';
import { DataService } from 'src/app/services/data.service';
import { DeletePersonComponent } from 'src/app/shared/delete-person/delete-person.component';
import { NewPersonComponent } from 'src/app/shared/new-person/new-person.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  displayedColumns: string[] = ['id_persona', 'nombre_persona', 'apellido_paterno', 'apellido_materno', 'tipo_persona', 'fecha_nacimiento', 'estatus_acomp', 'nombre_usr', 'acciones'];
  dataSource!: MatTableDataSource<TableData>;
  _dataSource!: MatTableDataSource<TableData>;
  trueDataSource!: MatTableDataSource<TableData>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private api:DataService, public router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords(){
    this.api.getTableData()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.entries);
        this._dataSource = new MatTableDataSource(res.entries);
        this.trueDataSource = new MatTableDataSource(res.entries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      },
      error: (err)=>{
        alert("Error while fetching data.");
      }
    })
  }

  reload(){
    this.api.getTableData()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.entries);
        this._dataSource = new MatTableDataSource(res.entries);
        this.trueDataSource = new MatTableDataSource(res.entries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
      },
      error: (err)=>{
        alert("Error while fetching data.");
      }
    })
  }

  searchBar(event: Event){
    let filterValue = (event.target as HTMLInputElement).value;
    if(filterValue != '')
      this.dataSource.data  = this.dataSource.data.filter(name => name.apellido_paterno.toLowerCase().indexOf(filterValue.trim().toLowerCase()) !== -1);
    if(filterValue === ''){
      this.dataSource.data = this._dataSource.data;
    }
  }

  openCreateDialog() {
    this.dialog.open(NewPersonComponent, {
      restoreFocus: false,
      disableClose: true,
      width:'75%',
      height: 'fit-content'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllRecords();
      }
    })
  }
  
  openDetailedEdit(data: TableData){
    localStorage.setItem('usertype', JSON.stringify(data.id_tipo_persona));
    this.router.navigate(['edit/' + data.id_persona]);
  }

  openDeleteDialog(data: TableData) {
    localStorage.setItem('usertype', JSON.stringify(data.id_tipo_persona));
    this.dialog.open(DeletePersonComponent, {
      restoreFocus: false,
      data: {
        id_persona: data.id_persona
      },
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllRecords();
      }
    })
  }

  selected = 'all';
  filterSecurity($event:any){
    this._dataSource.data = this.trueDataSource.data
    let filteredData = _.filter(this._dataSource.data,(item: any) =>{
      return item.estatus_acomp == $event.value;
    })
    this.dataSource.data = filteredData;
    this._dataSource.data = filteredData;
    if($event.value.toLowerCase() === 'all'){
      this.dataSource.data = this.trueDataSource.data;
    }
  }

  unSearch(){
    this.dataSource.data = this._dataSource.data
  }
}
