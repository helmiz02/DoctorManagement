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
}
