import { Component } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  maillogin : any ;
  public appPages = [
    {
      title: 'Patients Liste',
      url: '/list-patient',
      icon: 'home'
    },
    {
      title: 'Add Patient',
      url: '/patien',
      icon: 'add'
    }
    ,
    {
      title: 'Calende',
      url: '/calend',
      icon: 'calendar'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storage: Storage,
    private navCtrl: NavController
  ) {
    this.initializeApp();

                         this.storage.get('Email').then((val) => {
                          this.maillogin =val;
                          console.log(this.maillogin );
                          });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

    LogOut(){
        this.storage.clear();
        this.navCtrl.navigateRoot('/');
       // window.location.reload();
    }
}
