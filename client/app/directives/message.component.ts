import { Component, Input, OnInit } from '@angular/core';
import { GlobalVarsService } from '../services/global-vars.service.ts';

@Component({
    selector:   'message-item',
    template:   `
        <article class="message" [style.top]="message.y+'px'" [style.left]="message.x+'px'" [style.animation]="appearAnimation" [draggable-item]='updateMessage'>
            <header class="message-header">
                <h2>{{message.title}}</h2>
            </header>
            <p class="message-body">
                {{message.body}}
            </p>
        </article>
    `
})


export class MessageComponent implements OnInit {
    @Input() message:Object;
    appearAnimation: string = "";

    constructor ( 
        private _globals: GlobalVarsService
    ){}

    ngOnInit() {
        let delay = (Math.random()*this._globals.timeOfRefresh).toFixed(2);
        this.appearAnimation = `scaleInAnim 0.5s ${delay}s forwards`; 
    }

    updateMessage() {
        console.log("Message updated!");
    }
}
