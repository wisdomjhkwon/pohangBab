import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  userEmail: string;
  userPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AngularFireAuth, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async Signup() {
    if (this.userEmail != null && this.userPassword != null) {
      this.auth.auth.createUserWithEmailAndPassword(this.userEmail, this.userPassword).then(res => {
        this.navCtrl.pop();
      }, err => {
        let msg;
        switch (err.code) {
          case "auth/argument-error":
            msg = "잘못된 형식";
            break;

          case "auth/weak-password":
            msg = "비밀번호는 6자리 이상이여야 합니다"
            break;

          case "auth/invalid-email":
            msg = "잘못된 이메일 형식";
            break;

          case "auth/email-already-in-use":
            msg = "이미 사용중인 이메일";
            break;
        }
        this.alertCtrl.create({
          title: 'error',
          subTitle: msg,
          buttons: ['확인']
        }).present();
      });
    } else {
      this.alertCtrl.create({
        title: 'error',
        subTitle: '이메일, 비밀번호를 입력하세요',
        buttons: ['확인']
      }).present();
    }
  }

  IDCheck() {

  }

}
