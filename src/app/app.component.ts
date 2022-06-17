import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  innerWidth: any;
  onPc:boolean;
  public appPages = [
    { title: 'Cyberzine', url: '/home', icon: 'library' },
    { title: 'About', url: '/about', icon: 'newspaper' },
    { title: 'Submission', url: '/submission', icon: 'create' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Team', url: 'team', icon: 'people' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'FAQ', url: 'faq', icon: 'warning' },
  ];

  constructor(private gtmService: GoogleTagManagerService,
    private router: Router
    ) {}

  ngOnInit():void {
    this.innerWidth = window.innerWidth;
    this.confSidenav();
  }
  ngAfterViewInit():void{
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
          const gtmTag = {
              event: 'page',
              pageName: item.url
          };

          this.gtmService.pushTag(gtmTag);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.confSidenav()
  }
  confSidenav(){    
    if(this.innerWidth<992){
      this.onPc=false
    }
    else{
      this.onPc=true
    }
  }

}
