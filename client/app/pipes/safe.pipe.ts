import { Pipe } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafePipe {
    constructor(private _sanitizer:DomSanitizer ){}

    transform(style) {
        return this._sanitizer.bypassSecurityTrustStyle(style);
    }
}