import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { UserInfoService } from '../../services/user-info.service';
import { storage, saveOpenId, initToken } from '../../../utils';
import { Base64 } from 'js-base64';
import { weChatLogin } from '../../../request/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  visible: boolean;
  userVisible: boolean;

  constructor(public i18n: I18nService, public userInfo: UserInfoService) { }

  ngOnInit() {
    this.autoLogin()
  }

  /**
   * [语言切换]
   */
  languageChange(data: string): void {
    this.i18n.setLang(data)
    this.visible = false
  }

  /**
   * [微信登陆]
   */
  onWeChatLogin() {
    const browserId = new Date().getTime()
    const redirectUri = encodeURIComponent('http://api.mingz-tech.com/OAuth')
    const state = `web${browserId}`
    const wxLoginUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=wx9eca964047cb260f&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login&state=${state}#wechat_redirect`
    const webSocketUrl = `ws://api.mingz-tech.com/webSocket/${state}`
    const websocket = new WebSocket(webSocketUrl)
    const _this = this;
    websocket.onmessage = async function (event) {
      const eventData = JSON.parse(event.data)
      const openid = eventData.openidWeb
      const unionid = eventData.unionid
      saveOpenId({ openid, unionid })
      _this.userInfo.setUserInfo(eventData)
      websocket.close()
      try {
        storage({ type: 'set', key: 'loginType', val: 'wechat' })
      } catch (err) {
        console.error(err)
      }
    }
    const iWidth = 600
    const iHeight = 600
    const iTop = (window.screen.availHeight - 30 - iHeight) / 2
    const iLeft = (window.screen.availWidth - 10 - iWidth) / 2
    window.open(wxLoginUrl, '', 'height=' + iHeight + ', width=' + iWidth + ', top=' + iTop + ', left=' + iLeft)
  }

  /**
   * [退出登陆]
   */
  loginOut() {
    storage({ type: 'clear' })
    window.location.reload()
  }

  /**
   * [自动登陆]
   */
  async autoLogin() {
    const userTokensStr = storage({ type: 'get', key: 'userTokens' })
    if (userTokensStr) {
      const userToken = JSON.parse(Base64.decode(userTokensStr))
      if (userToken.expiryTime || userToken.expiryTime > new Date().getTime()) {
        const data = await weChatLogin({
          openid: userToken.openid,
          unionid: userToken.unionid,
          type: 1
        })
        if (data.status === 1) {
          this.userInfo.setUserInfo(data.user)
        } else {
          initToken()
        }
      } else {
        initToken()
      }
    } else {
      // 获取未登录时请求使用的token
      initToken()
    }
  }
}
