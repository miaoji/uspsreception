import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.less']
})
export class SiteComponent implements OnInit {
  isloading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isloading = true;
  }

}
