import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    urlTheme: 'assets/css/colors/default.css',
    theme: 'default'
  }

  constructor(
    @Inject(DOCUMENT) private _document,
  ) {
    this.getSettings();
  }

  saveSettings() {
    console.log('save in localstorage');
    localStorage.setItem('settings', JSON.stringify(this.settings))
  }

  getSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      console.log('Loading from localstorage');
      this.applySettings(this.settings.theme)
      
    } else {
      console.log('Default theme');
      this.applySettings(this.settings.theme)
    }

  }

  applySettings(theme) {

    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.urlTheme = url;
    this.saveSettings();
  }


}
interface Settings {

  urlTheme: String;
  theme: String;

}