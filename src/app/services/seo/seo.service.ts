import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private titleService :Title,private metaTags :Meta) { }
  seo(pageTitle,metaTag){
    this.titleService.setTitle(pageTitle)
    this.metaTags.addTags(metaTag)
  }
}
