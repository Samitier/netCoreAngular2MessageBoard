import { Component, Input, OnInit } from '@angular/core';
import { GlobalVarsService } from '../services/global-vars.service.ts';
import { WebApiService } from '../services/web-api.service.ts';

@Component({
    selector:   'message-item',
    template:   `
        <div class="message-container" [style.top]="message.y+'px'" [style.left]="message.x+'px'" [style.transform]="rotation | safe" [draggable-item]='updateMessagePosition'>
            <article class="message" [style.animation]="appearAnimation">
                <header class="message-header">
                    <h2>{{message.title}}</h2>
                </header>
                <p class="message-body">
                    {{message.body}}
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
        let delay = (Math.random()*this._globals.timeOfRefresh).toFixed(2);
        this.appearAnimation = `scaleInAnim 0.5s ${delay}s forwards`;
        if(typeof this.message.rotation == 'number') this.rotation = `rotateZ(${this.message.rotation}deg)`; 
    }

    updateMessagePosition(newPosition) {
        console.log(newPosition, this.message);
        
        //this.message.x = newPosition.x;
        //this.message.y = newPosition.y;
        //this._webApiService.putMessage(this.message); 
    }
}
