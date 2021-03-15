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
  ngOnInit(): void {
    this.teamOf(this.year);
  }

}
