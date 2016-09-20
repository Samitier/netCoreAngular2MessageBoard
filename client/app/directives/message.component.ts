import { Component, Input, OnInit } from '@angular/core';
import { GlobalVarsService } from '../services/global-vars.service.ts';
import { WebApiService } from '../services/web-api.service.ts';

@Component({
    selector:   'message-item',
    template:   `
        <div class="message-container" [style.top]="message.y+'px'" [style.left]="message.x+'px'" [style.z-index]="message.isCreating ? 4 : 1"
        [style.transform]="rotation | safe" draggable-item (onDrop)="updatePosition($event)">
            <article class="message" [style.animation]="appearAnimation">
                <header class="message-header">
                    <h2>
                        <span  [class.hidden]="message.isCreating">{{message.title}}</span>
                        <input [class.hidden]="!message.isCreating" type="text" placeholder="Title">
                    </h2>
                </header>
                <p class="message-body">
                    <textarea [class.hidden]="!message.isCreating" type="text" placeholder="Write a body and press enter to save this message."></textarea>
                    <span  [class.hidden]="message.isCreating">{{message.body}}</span>
                </p>
            </article>
        </div>   
    `
})


export class MessageComponent implements OnInit {
    @Input() message:any;
    appearAnimation: string = "";
    rotation: string = "";

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

    updatePosition(newPosition) {        
        this.message.x = newPosition.x;
        this.message.y = newPosition.y;
        this._webApiService.putMessage(this.message); 
    }
}
