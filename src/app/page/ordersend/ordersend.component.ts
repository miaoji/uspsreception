import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ordersend',
  templateUrl: './ordersend.component.html',
  styleUrls: ['./ordersend.component.less']
})
export class OrdersendComponent implements OnInit {
  isloading: boolean = false;
  token: string;

  constructor(public data: DataService) { }

  async ngOnInit() {
    this.isloading = true;
  }

}
