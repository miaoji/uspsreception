import { getToken } from '../request/getToken';
import md5 from 'js-md5';
import { storage } from '../utils/storage';

export async function initToken() {
  const timestamp = new Date().getTime()
  const nonceStr = md5(timestamp + 'winner')
  const key = 'mingz-tech.com'
  const realStr = 'nonceStr=' + nonceStr + '&timestamp=' + timestamp + '&key=' + key
  const sign = md5(realStr)
  const data = await getToken({ nonceStr, timestamp, sign });
  console.log('data', data);
  if (data.statusCode === 200) {
    storage({
      type: 'set',
      key: 'token',
      val: data.stringData
    })
  } else {
    initToken()
  }
}