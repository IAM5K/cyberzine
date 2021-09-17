import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  year:number=21;
  constructor() { }
  teamOf(yearin:number){
    if(yearin==20){
      this.year=yearin;
    }
    else if(yearin==19){
      this.year=yearin;
    }
    else{
        this.year=21;
    }
  }
  members:any=[
    {
      name:"Divyansh Bhatia",
      img:"../../assets/img/team/Divyansh.jpg",
      desig:"Managing Head & Chief Editor",
      domain:"Cyber Security and Digital Forensics (2018)",
      linkedin:"https://in.linkedin.com/in/divyanshbhatia250201",
    },
    {
      name:"Ghanishth Goyal",
      img:"../../assets/img/team/Ghanishth.jpg",
      desig:"Co-Managing Head & Designer Head",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/ghanishth-goyal/",
    },
    {
      name:"Sandeep Kumar",
      img:"../../assets/img/team/Sandeep.jpg",
      desig:"Head External Affairs & Web Management",
      domain:"Cyber Security and Digital Forensics (2018)",
      linkedin:"https://www.linkedin.com/in/sandeep-kumar-1680b0171/",
    },
    {
      name:"Anirudh Agarwal",
      img:"../../assets/img/team/Anirudh.jpg",
      desig:"Managing Editor",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/anirudh-agarwal-feb2000/",
    },
    {
      name:"Oorja Rungta",
      img:"../../assets/img/team/Oorja.jpg",
      desig:"External Affairs - Co-Head",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/oorja-rungta-91504b195/",
    },
    {
      name:"Aarushi Koolwal",
      img:"../../assets/img/team/Aarushi.jpg",
      desig:"Co-Head Columnist",
      domain:"Cyber Security and Digital Forensics (2019)",
      linkedin:"https://www.linkedin.com/in/aarushi-koolwal-b8b69a196",
    },
    {
      name:"Arundhati Menon",
      img:"../../assets/img/team/Arundhati.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/arundhati-menon-3b4524208",
    },
    {
      name:"Aditi Kurutala",
      img:"../../assets/img/team/Aditi.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/aditi-k-4246b3201",
    },
    {
      name:"Shivyanshi Shukla",
      img:"../../assets/img/team/Shivyanshi.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/shivyanshi-shukla-05b576203",
    },
    {
      name:"Anamika Mittal",
      img:"../../assets/img/team/Anamika.jpg",
      desig:"Editor",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/anamika-mittal-2a21211b4/",
    },
    {
      name:"Mansi Bakhshi",
      img:"../../assets/img/team/Mansi.jpg",
      desig:"Columnist",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"",
    },
    {
      name:"Khushi Garg",
      img:"../../assets/img/team/Khushi.jpg",
      desig:"Columnist",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"https://www.linkedin.com/in/khushi-garg-435b2b207",
    },
    {
      name:"Saket Upadhyay",
      img:"../../assets/img/team/Saket.jpg",
      desig:"External Affair",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"",
    },
    {
      name:"Fardeen Ahemed",
      img:"",
      desig:"External Affair",
      domain:"Cyber Security and Digital Forensics (2020)",
      linkedin:"",
    }
  ]

  ngOnInit(): void {
    this.teamOf(this.year);
  }

}
