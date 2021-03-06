import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-user-information',
  templateUrl: 'user-information.html'
})
export class UserInformationPage {
  userEmail=window.localStorage.getItem('currentuser');//현재 아이디
  
  userName: string=null;
  constructor(public navCtrl: NavController) {
    var locofat=this.userEmail.indexOf('@');
    this.userName=this.userEmail.slice(0,locofat);
    console.log(this.userName);
  }
  
}
