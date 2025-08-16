import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  title="About"
  pageTitle: string="About Cyberzine | VIT Bhopal - Cybersecurity & Digital Forensics";
  metaTag: string="Cyberzine, VIT Bhopal, cybersecurity magazine, digital forensics, cyber threats, cyber education, cyber warriors, cyber awareness, cyber ethics";
  constructor(
    private seoService: SeoService
  ) { }
  ngOnInit() {
    this.seoService.seo(this.pageTitle,this.metaTag)
  }

}
