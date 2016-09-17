import { Component, OnInit } from '@angular/core';
import { WebApiService } from './services/web-api.service.ts';

@Component({
  selector: 'main-app',
  template: `
    <message-item *ngFor="let message of messages" [message]="message"></message-item>
  `
})
export class AppComponent implements OnInit { 
  
  private messages: Array<Object>;

  constructor(
    private _webApiService: WebApiService
  ) { }

  ngOnInit() {
    this._webApiService.getMessages().then( messages => this.messages = messages);
  }
}