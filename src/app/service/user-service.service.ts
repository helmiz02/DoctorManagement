import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  header: HttpHeaders;
  constructor(public http : HttpClient) {
    this.header = new HttpHeaders();
    this.header = this.header.append('Content-Type', 'application/json');
    this.header = this.header.append('Accept', 'application/json');
  }

  all()
  {
    let url = '/dm/user/_search';
    return this.http.get(url, {headers: this.header});
  }

  allPatient()
  {
    let url = '/pat/patient/_search';
    return this.http.get(url, {headers: this.header});
  }

  addUser(user)
  {
    let url='/dm/user';
    return this.http.post(url, {"name": user.name, "email": user.email,"username": user.username,"password": user.password});
}

  checking(user){
    let url='/dm/user/_search';
    let body={
      "query":{
        "bool":{
          "must":[
            {"match":{"email" : user.Email}},
            {"match":{"password" : user.Password}}
          ]

        }
      }
    }
    return this.http.post(url,body,{headers:this.header});

  }


  addPatient(patient,mail){
    let url='/pat/patient/';
    return this.http.post(url,
      {"FullName": patient.FullName,
      "Email": patient.Email,
      "Telephone": patient.Telephone,
      "Description": patient.Description,
      "maillogin": mail
    },{headers:this.header});

  }

  getid(id){
    let url = '/pat/patient/'+id;
    return this.http.get(url, {headers: this.header});

  }

  update(id,pat){
    let url='/pat/patient/'+id;
    return this.http.post(url,pat,{headers:this.header})

  }

  deleteP(id){
    let url='/pat/patient/'+id;
    return this.http.delete(url,{headers:this.header})
  }
}
