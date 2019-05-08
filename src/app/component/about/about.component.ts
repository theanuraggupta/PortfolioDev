import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  aboutHtml: string;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.aboutHtml = this.appService.getConstantData('about');
  }

}
