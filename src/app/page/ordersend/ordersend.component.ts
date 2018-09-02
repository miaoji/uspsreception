import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-ordersend',
  templateUrl: './ordersend.component.html',
  styleUrls: ['./ordersend.component.less']
})
export class OrdersendComponent implements OnInit {
  isloading: boolean = false;
  token: string;

  constructor(public data: I18nService) { }

  async ngOnInit() {
    this.isloading = true;
  }

  onClick() {
  }

}
