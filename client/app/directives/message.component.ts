import { Component, Input } from '@angular/core';

@Component({
    selector:   'message-item',
    template:   `
        <article class="message" [style.top]="message.y+'px'" [style.left]="message.x+'px'">
            <header class="message-header">
                <h2>{{message.title}}</h2>
            </header>
            <p class="message-body">
                {{message.body}}
            </p>
        </article>
    `
})


export class MessageComponent {
    @Input() message:Object;
}
