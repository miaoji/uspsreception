// 用户多语言转换的一个服务
import { Injectable } from '@angular/core';
import { en, ch } from '../../assets/i18n';
import { storage } from '../../utils/storage';

@Injectable({
  providedIn: 'root'
})

export class I18nService {
  t: any;

  constructor() {
    const language = storage({ type: 'get', key: 'language' })
    this.setLang(language)
  }

  /**
   * [切换语言](默认为中文)
   * @param {String} language [语言所属国家简称]
   */
  setLang(language: string) {
    switch (language) {
      case 'ch':
        this.t = ch;
        break
      case 'en':
        this.t = en;
        break
      default:
        this.t = ch;
        break
    }
    storage({ type: 'set', key: 'language', val: language })
  }
}
/**
 * 使用方法:
 * 将I18nService文件引入到需要进行多语言转换的组件中
 * 直接使用t.[对应组件名(根据定义的语言进行划分)].[存储文字的变量名]
 */