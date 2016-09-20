import { Component, OnInit } from '@angular/core';
import { WebApiService } from './services/web-api.service.ts';
import { GlobalVarsService } from './services/global-vars.service.ts';

@Component({
  selector: 'main-app',
  template: `
    <message-item *ngFor="let message of messages" [message]="message" (onMessageCreated)="onMessageCreated()"></message-item>
    <button id="btn-add-message" class="noselect" (click)="addNewMessage($event)">Add</button>
    <div class="black-overlay" [class.invisible]="!isCreating" (click)="exitEditing()"></div>
  `
})
export class AppComponent implements OnInit { 
  
  private messages: Array<Object>;
  private messageCreated: Object;
  private isCreating: boolean = false;

  constructor(
    private _webApiService: WebApiService,
    private _globals: GlobalVarsService
  ) { }

  ngOnInit() {
    this._webApiService.getMessages().then( messages => this.messages = messages);
  }

  addNewMessage(event) {
    
    this.isCreating = true;
    this.messageCreated = {
      title: "",
      body: "",
      x: event.x - this._globals.offsetLeft,
      y: event.y - this._globals.offsetTop,
      rotation: Math.round(this._globals.maxMessageRotation * 2 * Math.random()) - this._globals.maxMessageRotation,
      isCreating: true
    };    
    this.messages.push(this.messageCreated);
  }

  exitEditing() {
    if(this.isCreating) {
      this.isCreating = false;
      this.messages.splice(this.messages.length - 1, 1);  
    }
  }

  onMessageCreated(){
    this.isCreating = false;
  }
}