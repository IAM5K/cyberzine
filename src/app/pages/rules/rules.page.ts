import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from 'src/app/modals/login/login.page';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  title="Submission"
  pageTitle: string="Submission guideline for Cyberzine | VIT Bhopal - Cybersecurity & Digital Forensics";
  metaTag: string="Cyberzine, VIT Bhopal, cybersecurity magazine, digital forensics, cyber threats, cyber education, cyber warriors, cyber awareness, cyber ethics";
  userData:any=null;
  constructor(
    private seoService: SeoService,
    private modalCtrl: ModalController,
    private authService:AuthService
  ) { 
    this.authService.getUser()

  }
  ngOnInit() {
    this.seoService.seo(this.pageTitle,this.metaTag)
    setTimeout(() => {
    this.getUserData()
    }, 1000);
  }
  
  getUserData(){
    this.userData = JSON.parse(localStorage.getItem('User'))
    console.log(this.userData)
  }

  ngOnDestroy(){
    console.log(this.userData)
  }
  async loginModal(){
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      componentProps:{user:this.userData}
    })
    await modal.present()
    const { data: user}= await modal.onWillDismiss()
    this.userData = user
  }
}
