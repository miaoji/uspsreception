import { getToken } from '../request/getToken';
import md5 from 'js-md5';
import { storage } from '../utils/storage';
import { saveOpenId } from './user'

export async function initToken() {
  const timestamp = new Date().getTime()
  const nonceStr = md5(timestamp + 'winner')
  const key = 'mingz-tech.com'
  const realStr = 'nonceStr=' + nonceStr + '&timestamp=' + timestamp + '&key=' + key
  const sign = md5(realStr)
  const data = await getToken({ nonceStr, timestamp, sign });
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

export {
  storage,
  saveOpenId
}