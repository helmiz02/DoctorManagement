import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {UserServiceService} from '../service/user-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  log: FormGroup;
  user :any ;
  maillogin :any ;
  constructor(public menuCtrl: MenuController, private navCtrl: NavController,
              public userservice: UserServiceService, private formBuilder: FormBuilder ,
              public storage: Storage
              ) {
    this.log = this.formBuilder.group({
      Email: ['', Validators.required]  ,
      Password: ['', Validators.required],


    });

                     this.storage.get('Email').then((val) => {
                      this.maillogin =val;
                      });



  }

  ngOnInit() {
      this.menuCtrl.enable(false);
  }

  Sign(){
    this.navCtrl.navigateRoot(
        "/sign-up"
    )
  }
  Login(){
    const verif =this.log.value;
      console.log(this.log.value);
    this.userservice.checking(verif).toPromise().then((response)=> {
        this.user=response ;
        console.log(this.user);
      if(verif.Email=="admin" && verif.Password == "admin"){
        this.navCtrl.navigateRoot( "/list");
                this.storage.set("Email",verif.Email);
                 this.storage.get('Email').then((val) => {
                    console.log('Your email is', val);
                    });
                    }
      else if(this.user.length !=0){
        //alert("found!");
        this.storage.set("Email",verif.Email);
        console.log(this.storage);
        this.navCtrl.navigateRoot("/list-patient");

      }
      else{
          alert("Erreur!");
      }
    });

  }



}
