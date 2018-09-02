import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  isloading: boolean = false;
  value: string;

  constructor() { }

  ngOnInit() {
    this.isloading = true;
  }
  handleOrderSearch() {
    console.log(this.value)
  }
}
