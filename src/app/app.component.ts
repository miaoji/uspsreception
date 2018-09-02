import { Component } from '@angular/core';
import { initToken } from '../utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  ngOnInit() {
    // 获取请求使用的token
    initToken()
  }
}
