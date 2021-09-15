import { Component, OnInit } from '@angular/core';
import { PausableObservable, pausable } from 'rxjs-pausable';
import { Subject, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  timer:number=1;
  days:number;
  hours:number;
  mins:number= 14;
  secs:number = 4;

  x=setInterval( ()=>{
    var futureDate= new Date("Sep 14, 2021 22:23:00").getTime ();
    var today = new Date () .getTime ();
    var distance = futureDate - today;
    this.days = Math.floor (distance/ (1000 * 60 * 60 *24)); 
    this.hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    this.mins = Math.floor ( (distance% (1000 * 60 * 60)) / (1000 * 60));
    this. secs = Math.floor ( (distance % (1000 * 60)) / (1000));
    // console. log (distance);
    if(distance<1000){
     this.timer=0; 
    }

    1000});


    paused = true;
    pausable: PausableObservable<number>;
  
    ngOnInit() {
      this.shoot();
      this.shoot2();
      this.pausable = interval(500)
        .pipe(pausable()) as PausableObservable<number>;
      this.pausable.subscribe(this.shoot.bind(this));
      this.pausable.subscribe(this.shoot2.bind(this));
      this.pausable.pause();
    }
  
    toggle() {
      if (this.paused) {
        this.pausable.resume();
      } else {
        this.pausable.pause();
      }
      this.paused = !this.paused;
    }
  
    shoot() {
      try {
        this.confetti({
          angle: this.random(45, 90),
          spread: this.random(40, 80),
          particleCount: this.random(40, 80),
          origin: {
              y: 0.8,
              x: 0.1,
          }
        });
      } catch(e) {
        // noop, confettijs may not be loaded yet
      }
    }
    shoot2() {
      try {
        this.confetti({
          angle: this.random(90, 140),
          spread: this.random(100, 150),
          particleCount: this.random(40, 80),
          origin: {
              y: 0.8,
              x: 0.8,
          }
        });
      } catch(e) {
        // noop, confettijs may not be loaded yet
      }
    }
  
    random(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
  
    confetti(args: any) {
      return window['confetti'].apply(this, arguments);
    }


}

