import { Component, Input, OnInit } from '@angular/core';
import { GlobalVarsService } from '../services/global-vars.service.ts';

@Component({
    selector:   'message-item',
    template:   `
        <div class="message-container" [style.top]="message.y+'px'" [style.left]="message.x+'px'" [style.transform]="rotation | safe" [draggable-item]='updateMessage'>
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
        private _globals: GlobalVarsService
    ){}

    ngOnInit() {
        let delay = (Math.random()*this._globals.timeOfRefresh).toFixed(2);
        this.appearAnimation = `scaleInAnim 0.5s ${delay}s forwards`;
        if(typeof this.message.rotation == 'number') this.rotation = `rotateZ(${this.message.rotation}deg)`; 
    }

    updateMessage() {
        console.log("Message updated!");
    }
}
