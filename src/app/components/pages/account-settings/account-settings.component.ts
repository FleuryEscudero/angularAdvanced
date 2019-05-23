import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public _settings: SettingsService
  ) {

  }

  ngOnInit() {
    this.colorCheck();
  }

  changeColor(theme, link) {


    this.checkConfirm(link);
    this._settings.applySettings(theme);

  }

  checkConfirm(link) {

    let selectors: any = document.getElementsByClassName('selector');

    for (let ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working')
  }

  colorCheck(){
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;
    for (let ref of selectors) {
       if( ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
       }
    } 

  }

}
