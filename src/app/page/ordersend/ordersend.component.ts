import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordersend',
  templateUrl: './ordersend.component.html',
  styleUrls: ['./ordersend.component.less']
})
export class OrdersendComponent implements OnInit {
  isloading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isloading = true;
  }

}
