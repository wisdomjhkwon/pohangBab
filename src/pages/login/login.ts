import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { SignupPage } from '../signup/signup';

import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = null;

  userEmail: string;
  userPassword: string;

  constructor(private facebook: Facebook, public navCtrl: NavController, private auth: AngularFireAuth, public alertCtrl: AlertController) {

  }

  LoginWithFB() {
    // this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
    //   this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
    //     this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
    //   })
    // })
    this.facebook.login(['email']).then(res => {
      const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(fc).then(fs => {
        // alert("firebase sec")
        this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
        })
        this.userEmail=this.userData.email;
        window.localStorage.setItem('currentuser', this.userEmail);
        alert(this.userEmail);
      }).catch(ferr => {
        alert("login error")
      })

    }).catch(err => {
      alert(JSON.stringify(err))
    })
  }


  async login() {

    if (this.userEmail != null && this.userPassword != null) {
      this.auth.auth.signInWithEmailAndPassword(this.userEmail, this.userPassword).then(res => {
        window.localStorage.setItem('currentuser', this.userEmail);
        this.navCtrl.setRoot(HomePage);
      }, err => {
        let msg;
        switch (err.code) {
          case "auth/argument-error":
            msg = "잘못된 형식";
            break;

          case "auth/wrong-password":
            msg = "잘못된 비밀번호";
            break;

          case "auth/user-not-found":
            msg = "존재하지 않는 이메일";
            break;

          case "auth/invalid-email":
            msg = "잘못된 이메일 형식";
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


  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
