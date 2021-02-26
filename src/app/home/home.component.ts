import { HostListener, Output,EventEmitter} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  isFixedNavbar:boolean;
  @HostBinding('class.navbar-opened') navbarOpened = false;
  
  @Output() isLogout = new EventEmitter();
  
  constructor( ) { } 
  ngOnInit() {
  }  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }


  ngAfterViewInit() {
    $("#search-icon").click(function() {
      $(".nav").toggleClass("search");
      $(".nav").toggleClass("no-search");
      $(".search-input").toggleClass("search-active");
    });
    
    $('.menu-toggle').click(function(){
       $(".nav").toggleClass("mobile-nav");
       $(this).toggleClass("is-active");
    });
  }


  



}

