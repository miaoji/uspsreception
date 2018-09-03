import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  isLogin: boolean = false;
  userInfo: object;
  constructor() { }

  setUserInfo(data) {
    console.log('data', data)
    this.isLogin = true;
    this.userInfo = data;
  }
}
