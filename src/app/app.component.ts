import { Component, OnInit } from '@angular/core';
import { User,Register } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'summarize';

  userModel = new User('','');

  // Data Validation with dynamic UI setup for Registration
  reg = new Register('',"","");
  allowRegister:boolean;
  passwordSignup2:string = this.reg.passwordSignup2;
  passwordSignup:string=this.reg.passwordSignup;
  emailSignup:string=this.reg.emailSignup;

  // for switching between login and register
  isRegistered:boolean;
  togglelogin(){
    if(this.isRegistered==false){
      this.isRegistered=true;
    }
    else if(this.isRegistered==true){
      this.isRegistered=false;
    }
  }

// Firebase service 

  isSignedin=false;
  message:string;
  constructor() { }

  ngOnInit(): void {

  }

}
