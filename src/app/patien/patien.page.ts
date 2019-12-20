import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {UserServiceService} from '../service/user-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-patien',
  templateUrl: './patien.page.html',
  styleUrls: ['./patien.page.scss'],
})
export class PatienPage implements OnInit {
  Pform: FormGroup ;
  submitted: boolean;
  pat: any;
  maillogin: any ;

  constructor(private navCtrl: NavController, public menuCtrl:MenuController,
              public userservice: UserServiceService, private formBuilder: FormBuilder ,
              public storage: Storage) {
    this.Pform = this.formBuilder.group({
      FullName: ['', Validators.required]  ,
      Email: ['', Validators.required],
      Telephone: ['', Validators.required],
      Description: ['', Validators.required]


    });
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.storage.get('Email').then((val) => {
      this.maillogin =val;
    });
  }

  Add(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.Pform.invalid) {
      console.log(this.Pform.value)
      console.log('not valide')
      return;
    }
    //console.log(this.Pform.value);
    this.userservice.addPatient(this.Pform.value, this.maillogin ).subscribe(res => {

      console.log(res);
      this.pat = res ;

      this.navCtrl.navigateRoot("/list-patient");


    });
  }

}
