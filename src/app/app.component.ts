import { Component } from '@angular/core';
import { UserInfoService } from './services/user-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public user: UserInfoService) { }
  ngOnInit() {}
}
