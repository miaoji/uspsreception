import { Component, OnInit } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  visible: boolean;
  constructor(public i18n: I18nService) { }

  ngOnInit() {
    console.log('ttt', this.i18n.t)
  }

  languageChange(data: string): void {
    this.i18n.setLang(data)
    this.visible = false
  }

}
