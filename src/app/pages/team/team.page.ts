import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  title="Our Team"
  constructor(
    private teamService: TeamService
  ) { }

  members:any=[
    {
      name:"Divyansh Bhatia",
      img:"assets/img/team/Divyansh.jpg",
      desig:"Managing Head & Chief Editor",
      domain:"Cyber Security and Digital Forensics (2018)",
      linkedin:"https://in.linkedin.com/in/divyanshbhatia250201",
    },
    {
      name:"Ghanishth Goyal",
      img:"assets/img/team/Ghanisth.jpg",
      desig:"Co-Managing Head & Designer",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/ghanishth-goyal/",
    },
    {
      name:"Sandeep Kumar",
      img:"assets/img/team/Sandeep.jpg",
      desig:"Head External Affairs & Web",
      domain:"Cyber Security and Digital Forensics (2018)",
      linkedin:"https://www.linkedin.com/in/IAM5K/",
    },
    {
      name:"Anirudh Agarwal",
      img:"assets/img/team/Anirudh.jpg",
      desig:"Managing Editor",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/anirudh-agarwal-feb2000/",
    },
    {
      name:"Oorja Rungta",
      img:"assets/img/team/Oorja.jpg",
      desig:"Managing Editor",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/oorja-rungta-91504b195/",
    },
    {
      name:"Soumya Tiwari",
      img:"assets/img/team/Soumya.jpg",
      desig:"Managing Editor",
      domain:"Cyber Security and Digital Forensics (2018)",
      linkedin:"https://www.linkedin.com/in/aarushi-koolwal-b8b69a196",
    },
    {
      name:"Arundhati Menon",
      img:"assets/img/team/Arundhati.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/arundhati-menon-3b4524208",
    },
    {
      name:"Aditi Kurutala",
      img:"assets/img/team/Aditi.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/aditi-k-4246b3201",
    },
    {
      name:"Shivyanshi Shukla",
      img:"assets/img/team/Shivyanshi.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/shivyanshi-shukla-05b576203",
    },
    {
      name:"Anamika Mittal",
      img:"assets/img/team/Anamika.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/anamika-mittal-2a21211b4/",
    },
    {
      name:"Aarushi Koolwal",
      img:"assets/img/team/Aarushi.jpg",
      desig:"Head Columnist",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/aarushi-koolwal-b8b69a196",
    },
    {
      name:"Mansi Bakhshi",
      img:"assets/img/team/Mansi.jpg",
      desig:"Columnist",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"",
    },
    {
      name:"Khushi Garg",
      img:"assets/img/team/Khushi.jpg",
      desig:"Columnist",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/khushi-garg-435b2b207",
    },
    {
      name:"Saket Upadhyay",
      img:"assets/img/team/Saket.jpg",
      desig:"External Affair",
      domain:"Cyber Security and Digital Forensics (2018)",
      linkedin:"",
    },
    {
      name:"Fardeen Ahemed",
      img:"assets/img/team/Fardeen.jpg",
      desig:"External Affair",
      domain:"Cyber Security and Digital Forensics (2018)",
      linkedin:"",
    }
  ]
  ngOnInit() {
    // console.log(this.members[0])
    // this.teamService.getTeams('2021').subscribe(res=>{console.log('query',res)})
    // this.teamService.addMember(this.members[0])
  }

  // addMemeber(){
  //   const fileRef=""
  //   this.storage.upload
  // }
  // gs://cyberzine-4b9cb.appspot.com/teams/2021
}
