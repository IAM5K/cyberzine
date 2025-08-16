import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  title="CyberZine"
  mag="Cyberzine 2021"
  mags:any = ['Cyberzine 2021','Cyberzine 2020','Cyberzine 2019']
  pageTitle :string ="Cyberzine | Initiative by Division of Cyber Security and Digital Forensics VIT Bhopal"
  metaTag:any =[
    {
      name:'description',
      content:"Cyberzine is annual Cyber Security magazine released by Division of Cyber Security and Digital Forensics at VIT Bhopal University. It is filled with interesting articles,news, tutorials and puzzles about Cyber Security and Digital Forensics, bringing to you professional knowledge in byte sized chunks. Read it now and get started with Cyber Security and Digital Forensics."
    },
    {
      name:'keyword',
      content:'cyberzine.web, cyberzine.web.app, cyberzine, cyber magazine, iam5k, CyberZine 2021, CyberZine 2019, CyberZine2018, CyberZine 2022, CyberZine, cyber news, cyber articles, vit bhopal, vit university, vit, vit vellore, Magazine,Cyberzine,Vit bhopal,Vit university, Cybersecurity,Digital forensics, learn cyber security, Getting started with Cyber Security, Getting started with Cyber Security and digital forensics, Developed by Sandeep Kumar, Cybersecurity Magazine,Cybersecurity Magazine of India, Sandeep Kumar, #cyberzine, #cyvit , #sandeepkumar'
    },
    {
      name:'author',
      content:'Sandeep Kumar | Division of Cyber Security and Digital Forensics VIT Bhopal University'
    }
  ]
  readUrl2021:any='https://drive.google.com/file/d/1oSufvf4dPu6hSDBpUhMYcthLtNhVmW0P/view?usp=sharing'
  readUrl2020:any='https://drive.google.com/file/d/1K_UF7qOO-8VbRqIVU8tOr7O6SYL06Z0a/view?usp=sharing'
  readUrl2019:any='https://drive.google.com/file/d/1sWFFc7BDsXTYuKWoaMFHKlkJopV2-mzm/view?usp=sharing'

  constructor(
    private seoService: SeoService
  ) { }
  ngOnInit() {
    this.seoService.seo(this.pageTitle,this.metaTag)
  }


  openMag(year:string){
    let url:string;
    switch(year){
      case '2021':
        url=this.readUrl2021;
        break;
      case '2020':
        url=this.readUrl2020;
        break;
      case '2019':
        url=this.readUrl2019;
        break;
      default:
        return;
    }
    window.open(url,'_blank');
  }
}
