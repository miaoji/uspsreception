import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  visible: boolean;
  constructor() { }

  ngOnInit() {
  }

  languageChange(data: string): void {
    console.log('data', data)
    this.visible = false
  }

}
