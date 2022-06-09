import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  title="CyberZine"
  mag="Cyberzine 2021"
  mags:any = ['Cyberzine 2021','Cyberzine 2020','Cyberzine 2019']
  constructor() { }
  ngOnInit() {
  }

}
