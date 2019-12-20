import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserServiceService} from '../service/user-service.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  registerForm: FormGroup;
  private submitted: boolean;
  private User: any;

  constructor(public userservice: UserServiceService, private formBuilder: FormBuilder,
              public navCtrl: NavController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value)
      console.log('not valide')
      return;
    }

    this.userservice.addUser(this.registerForm.value).subscribe(res => {

      console.log(res);
      //this.User = res ;
      // this.registerForm.reset();
      this.navCtrl.navigateRoot("/login");


    });

  }


}
