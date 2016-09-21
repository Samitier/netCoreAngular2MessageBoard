import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalVarsService } from '../services/global-vars.service.ts';
import { WebApiService } from '../services/web-api.service.ts';

@Component({
    selector:   'message-item',
    template:   `
        <div class="message-container" [style.top]="message.y+'px'" [style.left]="message.x+'px'" [style.z-index]="message.isCreating ? 4 : 1"
        [style.transform]="rotation | safe" draggable-item (onDrop)="onUpdatePosition($event)">
            <article class="message" [style.animation]="appearAnimation">
                <header class="message-header">
                    <h2>
                        <span  [class.hidden]="message.isCreating">{{message.title}}</span>
                        <input [class.hidden]="!message.isCreating" type="text" placeholder="Title" [(ngModel)]="message.title" required>
                    </h2>
                </header>
                <p class="message-body">
                    <textarea [class.hidden]="!message.isCreating" type="text" placeholder="Write a body and press enter to save this message." 
                     [(ngModel)]="message.body" (keyup.enter)=onSendMessage() required></textarea>
                    <span [class.hidden]="message.isCreating">{{message.body}}</span>
                </p>
            </article>
        </div>   
    `
})


export class MessageComponent implements OnInit {
    @Input() message:any;
    @Output() onMessageCreated =  new EventEmitter<boolean>();

    appearAnimation: string = "";
    rotation: string = "";
    isSending: boolean = false;

    constructor ( 
        private _globals: GlobalVarsService,
        private _webApiService: WebApiService
    ){}

    ngOnInit() {
        let delay;
        if(this.message.isCreating) delay = 0;
        else delay = (Math.random()*this._globals.timeOfRefresh).toFixed(2);
        this.appearAnimation = `scaleInAnim 0.5s ${delay}s forwards`;
        if(typeof this.message.rotation == 'number') this.rotation = `rotateZ(${this.message.rotation}deg)`; 
    }

    onUpdatePosition(newPosition) {    
        if(!this.message.isCreating) {
            this.message.x = newPosition.x;
            this.message.y = newPosition.y;
            this._webApiService.putMessage(this.message);
        }     
    }
    
    onSendMessage() {
        if(this.message.isCreating && !this.isSending) {
            this.isSending = true;
            this._webApiService.postMessage(this.message).then(response => {
                this.message = response;
                this.onMessageCreated.emit(true);
                this.isSending = false;
            }).catch( error => {
                this.onMessageCreated.emit(false);
            });
            this.message.isCreating = false;
        }
    }

}
