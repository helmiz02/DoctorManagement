import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {UserServiceService} from '../service/user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 users : any;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public menuCtrl: MenuController,public userservice: UserServiceService) {
  this.menuCtrl.enable(true);

  }

  ngOnInit() {

    this.userservice.all().subscribe((userList :any)=>{
    this.users = userList.hits.hits;
    });
}

}
