import { storage } from './storage';
import { Base64 } from 'js-base64';

export const saveOpenId = ({ openid, unionid }) => {
  const expiryTime = new Date().getTime() + 86400000;
  let userToken = {
    openid,
    unionid,
    expiryTime
  }
  const tmp = JSON.stringify(userToken);
  const userTokens = Base64.encode(tmp);
  storage({
    type: 'set',
    key: 'userTokens',
    val: userTokens
  })
}
