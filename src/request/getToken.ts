import { token } from '../utils/api';
import request from '../utils/request';

export async function getToken(params: any) {
  return request({
    url: token.get,
    method: 'get',
    auth: false,
    params
  })
}
