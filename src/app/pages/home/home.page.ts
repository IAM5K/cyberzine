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
  readUrl2021:any='https://drive.google.com/file/d/1D7TGEJ6bF1l1GtbGqhCi6TD0huhma1WC/view?usp=sharing'
  downloadUrl2021:any='https://doc-14-0c-docs.googleusercontent.com/docs/securesc/cu2ecminba2mbhrrgkvp2slmh1s87jmj/c3chvvdfuae8nkcj6rt54milelm6ant3/1653746400000/10109295364891650025/10109295364891650025/1D7TGEJ6bF1l1GtbGqhCi6TD0huhma1WC?e=download&ax=ACxEAsYDyTIIf3pUJ-av7DvOFg4cQoGuAbaFspwnx2xm-RMjk8qNA8OpnPg2Ntd9l-sFrmiNCYeiKg6MpvEe5GGFx0XU_GnYi2-ToZZCiLjB1xX4gZL6yFWG_Uex7vbzn54kQtjWU_vNmwXKS0j6g9SxRb7Hy0_dr95mqjSjY1jIRWeCOtYoT4zclq0G59rbm0z_OK7FOCe1Ue_XTZUKBytza1j3zK_1Xu0ODKDuXqh5Zfj5mZQ2qKdG6yULh6r0LfRyM3V7IhDxD2j0xjfoZz0yinB_gFtRAhh2OUxEEffg8imo32e1hClHq5yT4oDiFHT9FCZA4Gk-E9sfC83GzZOsEp6HReo-DdpAVK0anZqp-IhOvCM_moOxm4fXyEJfJEgbwXVi_0nf9JrOoCxcwM_szUlX_Gn0GzQUepTdq88klUTOGTzNBtJw72EZzZsPQ17cyNaJfFkbT7bIG_ocIwxrdC8r3zvhqlytmsU2e8KztYxLcFHz6IJDd_595WzFbGXdaqq8v-3iLC4vrZxPPIlUHuPWbAXOHTp5XEqGl9kq7JzMMtPEEEy-XDAtNRNV5zM8b0NVIGo1iJZqpfAFWMgIKinLlsAyIWGhO_Gbu8H4Nd2CoH0AvLz9uUvIqGxPhSiWjqrESH-9bz22fBNtSrmrBwGGwqwYXVbkz4CjLzQbrDhIZuhpa1TheiTw50anDRPiEjuzurSXNfAVC9Wu6K7a11KMpdo630dRyv8HHTW7PY9uMX27w2jYgCzaYzeuPAR34FmZurlznHiqTXf-dFU&authuser=0'
  readUrl2020:any='https://drive.google.com/file/d/1jfaTBdzCpHDs1idQ2lciM7R_7T5GfwJp/view?usp=sharing'
  downloadUrl2020:any='https://doc-00-0c-docs.googleusercontent.com/docs/securesc/cu2ecminba2mbhrrgkvp2slmh1s87jmj/pvq6pnnrjq7aieia0hicm91vco3gi6bc/1653746325000/10109295364891650025/10109295364891650025/1jfaTBdzCpHDs1idQ2lciM7R_7T5GfwJp?e=download&ax=ACxEAsZRimKJxk0PxDNVapq8qN8TtT3et5QOybQpSxXMqULxYYo830FteqSq7c05Dd7V5L-Bfgix87rLAGd2r9cx6Z4reQFwi6JMOsdoJEp-Cayxf7YE8pZfkaidJiP_gq71UMStuHBaDLCd7nlvRy1A949TMZLcOSrQXufiGw2RK5jSpDVLeTs1tfiWW92G4SBGPbydDrvMnSy7U8AjCBg5V6XImD5_JuUw_oJJcUE_FSUCczAX9BX35YGfmi8tdZdA6nfBnHrOYdo1BMaDHM4F8G0pw28XOLNfH8ynejz4sLiUtq8CIroSbLraC8OARSE47-lTstG0RDFhO5fo-1ds9vmtB0EetaFsBRh1Kl4BABd6Fs5p77R5SmxFllPELnY4UNTCOQB2po8XlzgRRm05P1MgLE5EOcjJTrqiClZZSN2OitKcf3k1h3S83d3X9-iYF1Cj6OHehwaop2ogQ5Wt2snOTd9M5o6mkXHU9fLR6xgspY4zPF7GLfD3Mu0FLTfC3oCZV1uUN_cjv0TUXzvGwVnH1wZI-x6FmV0M4OCNRqBQhTYkpKqOY52zoJB8t6cyYbpdl14tmowBln50Yc1UEj_Hs0giKDv2eSFV8stMzzmdxL5ZATSDHz4sadhOnqeKXzMWeltcY2Fv9svIHGD2GgWdDkBe2ux0JRdq2eOGQsCEZEA7kF1c0c3wFnZo7iVoIFWG1SxJzzkC1a0EoXJjzrHv6dRvsQaXs2jw_99AHgUbv0-zHKHImGhfi6BUmyq4Pc-7mp0co7vjcZFkb4s&authuser=0'
  readUrl2019:any='https://drive.google.com/file/d/1TA6tUf0NUEEypmY1mE1ajn32xpFBCRM7/view?usp=sharing'
  downloadUrl2019:any='https://doc-14-0c-docs.googleusercontent.com/docs/securesc/cu2ecminba2mbhrrgkvp2slmh1s87jmj/ika4sh4lhgme80cntpu9tr5d7pcsbi5i/1653746325000/10109295364891650025/10109295364891650025/1TA6tUf0NUEEypmY1mE1ajn32xpFBCRM7?e=download&ax=ACxEAsaOZ14RNPC8B4i_K3wvu1OpXVeJSdFqLWYiXNe81yenfOH82G02bA_867lU_ijZx6DpmwrInAyevtFfQ4vRCsKUmb7b7oIXcgcgJdfYjxaeKg8nn36NKTQ8xPKD33fBrdcVe7SUeUqffj1Z3aBmF5s6vegRQH7I3W5zfsZPF-5WV7kHHCEAQ2fCbLPWbm3lkJc6HGWL36bkdxO_OggAd4F9R1mm9AgQkdwZowxAI-6pKYc58th3ja0RMtQjFLHp8ze_1KkTyH2eRqVcqSPBqCG-p2Rfao6SVGt6gYZtRzkBxEPYmbV9Rhc1MzEknL83Cr3Wcwgx7YP65QpM2ilIdODeQsky2Maw5tIF6uCXHbJ2H0n03yz29tcvvWE4tMBHgzTX2EIyI9t8bI1Eo-G_1ppoCfvLOu_pNgWOf15dMFOZjAZg8XSzq5-lng_QMV54Oo2JalYjQpRNYzA4DvlEykl7-hJF_aQpKORvSO9PJvWPeWp94-NQNBKUecfFMKWUnVBhani0lQcX3NMIPBh3tGayFlm1RMZgFgZKJudl3LIqNRH7YZSC3WAroFPytPeaait7Ii6y6jMgwrfdRwWyOJz7ftbYch5owxyb5i2JtrREvEuCIxWsHBk43TmLy5VGScipeU7MJrR5ss6UCqsPHiU-zoNsTrow-zpz6aL2IL3tLVMYUmmlasohOVoglj2iZFzqpKWBuaw9yQ4vJYmH9U4bYrUdkzekmB-ya14S-2AqhYkgx1NMjMPebdSwn537yBd76xLxyp5ytML6BnE&authuser=0&nonce=bd6hkl1nvn3c6&user=10109295364891650025&hash=1luptbfi41q49edb54s7torp1aqmmrbd'

  constructor(
    private seoService: SeoService
  ) { }
  ngOnInit() {
    this.seoService.seo(this.pageTitle,this.metaTag)
  }

}
