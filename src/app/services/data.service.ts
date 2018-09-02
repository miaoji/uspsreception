import { Injectable } from '@angular/core';
import request from '../../utils/request';

@Injectable()
export class DataService {
  users: any[];
  username: string = 'aaa';
  getToken: string = 'http://api.mingz-tech.com/login/getToken';
  constructor() {}

  async getUsers() {
    return request({
      url: this.getToken
    })
  }

}
