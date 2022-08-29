import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any = null;
  user$: Observable<User>;
  userRole: any;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.firebaseAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  getUser() {
    this.firebaseAuth.authState.subscribe((user) => {
      this.user = user ? user : null;
      if (this.user == null) {
        this.getUser();
      } else {
        // console.log(this.user);
        localStorage.setItem('User', JSON.stringify(this.user));
      }
    });
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.firebaseAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `user/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'reader',
    };

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this.firebaseAuth.signOut();
    localStorage.clear()
    this.router.navigate(['/']);
  }

  getRole(uid) {
    console.log(uid);
    const userFetched = this.afs.doc(`user/${uid}`).valueChanges();
    console.log(userFetched);
  }
}
