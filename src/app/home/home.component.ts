import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  days: number = 194;
  hours:number = 22;
  mins:number= 14;
  secs:number = 4;

  x=setInterval( ()=>{
    var futureDate= new Date("Sep 19, 2021 10:00:00").getTime ();
    var today = new Date () .getTime ();
    var distance = futureDate - today;
    this.days = Math.floor (distance/ (1000 * 60 * 60 *24)); 
    this.hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    this.mins = Math.floor ( (distance% (1000 * 60 * 60)) / (1000 * 60));
    this. secs = Math.floor ( (distance % (1000 * 60)) / (1000));
    // console. log (distance);
    // if(distance<906){
    //   alert("Time over");
    // }

    1000});

  ngOnInit(){


  }
}

