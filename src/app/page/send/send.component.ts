import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.less']
})
export class SendComponent implements OnInit {
  isloading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isloading = true;
  }

}
