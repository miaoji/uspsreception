import { login } from '../utils/api';
import request from '../utils/request';

export async function weChatLogin(params: any) {
  return request({
    url: login.weChat,
    method: 'get',
    params
  })
}