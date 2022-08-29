import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import firebase from 'firebase/compat/app';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() user:any
  constructor(public fireAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private authService:AuthService) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
      this.authService.user= this.user
    });
  }

  login() {
    this.authService.googleSignin();
    // this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.authService.signOut();
    // this.fireAuth.signOut();
  }
  ngOnInit() {
  }
  dismissModal(){
    console.log(this.user)
    this.modalCtrl.dismiss(this.user)
  }
}
