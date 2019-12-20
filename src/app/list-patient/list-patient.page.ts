import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {UserServiceService} from '../service/user-service.service';
import {Storage} from '@ionic/storage';
import {createConsoleLogger} from '@angular-devkit/core/node';
@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.page.html',
  styleUrls: ['./list-patient.page.scss'],
})
export class ListPatientPage implements OnInit {
  pts:any ;
  mail :any ;
  m: any ;
  i :any ;
  constructor(public menuCtrl: MenuController,public userservice: UserServiceService,
              public storage : Storage
           ) {
    this.menuCtrl.enable(true);

    this.storage.get('Email').then((val) => {
      this.mail = val;
      console.log(this.mail);
    });


  }

  ngOnInit() {


    this.userservice.allPatient().subscribe((pList :any)=> {
     // this.m = pList;
      this.pts = pList.hits.hits;
  console.log(this.pts);
    });

  }

  del(id){
    this.userservice.deleteP(id).toPromise().then((res)=>{

    });
    window.location.reload();
  }

}
