import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  title="About"
  pageTitle: string="";
  metaTag: string="";
  constructor(
    private seoService: SeoService
  ) { }
  ngOnInit() {
    this.seoService.seo(this.pageTitle,this.metaTag)
  }

}
