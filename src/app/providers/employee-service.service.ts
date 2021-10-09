import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  headers = new HttpHeaders({
    'content-type':'json'
  })
  constructor( public _http:HttpClient ) { }
  getToken(){

  }
  getEmployees(){

     return this._http.get(`${environment.serverOptions.url}${environment.serverOptions.url_employees}`,{headers:this.headers}) 

  }
  getRickandMOrty(){
    return this._http.get(`${environment.serverOptions.url2}`) 
  }


}
