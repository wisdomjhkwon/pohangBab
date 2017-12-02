import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  success: boolean=false;

  constructor(public http: Http, public af: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

 loginWithEmail(credential) {
    return Observable.create(observer => {
      this.af.auth.signInWithEmailAndPassword(credential.email, credential.password).then((authData) => {
        console.log(authData);
        console.log("Success!, User is login..");
        
      })
        .catch((error) => {
          console.log(error);
          console.log("Error, Login fail...");
        })
    })
  }

}
