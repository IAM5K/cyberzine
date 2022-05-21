import { AfterViewInit, Component, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';
import { User,Register } from './user';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
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

