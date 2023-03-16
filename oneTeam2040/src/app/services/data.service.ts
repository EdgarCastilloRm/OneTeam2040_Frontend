import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, UserInfo } from '../models/infoUser';
import { DetailedInfant, DetailedPerson, TableDataResponse } from '../models/tableData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getUserData(data: any): Observable<UserInfo[]> {
    let params = new HttpParams();
    params = params.append('email', data.email);
    params = params.append('psw', data.psw);
    return this.http.get<UserInfo[]>('http://localhost:4000/users', {
      params: params,
    });
  }

  getTableData(): Observable<TableDataResponse> {
    return this.http.get<TableDataResponse>("http://localhost:4000/table");
  }

  getDetailedPerson(id_persona:Number): Observable<DetailedPerson> {
    return this.http.get<DetailedPerson>("http://localhost:4000/person/" + id_persona);
  }

  getDetailedInfant(id_persona:Number): Observable<DetailedInfant> {
    return this.http.get<DetailedInfant>("http://localhost:4000/infant/" + id_persona);
  }

  getAllUsers(): Observable<Options[]> {
    return this.http.get<Options[]>("http://localhost:4000/users/all");
  }
  
  postPerson(body:any){
    return this.http.post("http://localhost:4000/person/", body);
  }

  putPerson(body:any, id_persona:Number){
    return this.http.put("http://localhost:4000/person/" + id_persona, body);
  }

  postInfant(body:any){
    return this.http.post("http://localhost:4000/infant/", body);
  }

  putInfant(body: any, id_persona:Number){
    return this.http.put("http://localhost:4000/infant/" + id_persona, body);
  }

  deletePerson(id_persona: Number){
    return this.http.delete("http://localhost:4000/person/" + id_persona);
  }

  deleteInfant(id_persona: Number){
    return this.http.delete("http://localhost:4000/infant/" + id_persona);
  }
 
  updateGuide(id_persona:Number, body:any){
    return this.http.put("http://localhost:4000/guide/" + id_persona, body);
  }
}
