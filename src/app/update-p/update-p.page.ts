import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserServiceService} from '../service/user-service.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.page.html',
  styleUrls: ['./update-p.page.scss'],
})
export class UpdatePPage implements OnInit {
  private registerForm: FormGroup;
  private id: any;
  private FullName: any ;
  private Email : any ;
  private Telephone : any ;
  private Description :any ;
  User:any;
  val : any ;
  constructor(public userservice: UserServiceService, private formBuilder: FormBuilder,public router:ActivatedRoute,
              public navCtrl:NavController) { }

  ngOnInit() {

    this.id=this.router.snapshot.paramMap.get('id');
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Email: ['', Validators.required],
      Telephone: ['', Validators.required],
      Description: ['', Validators.required],

    });

   this.userservice.getid(this.id).subscribe((res:any) => {
      console.log(res);
      this.val = res._source ;
      this.FullName =this.val.FullName;
      this.Email = this.val.Email;
      this.Telephone =this.val.Telephone;
      this.Description = this.val.Description;

   });


  }

  edit(){

    this.userservice.update(this.id, this.registerForm.value).toPromise().then((res )=>{
            console.log(res);
            this.User = res;
           console.log("updated");
          this.navCtrl.navigateRoot("/list-patient");


        });
  }

}
