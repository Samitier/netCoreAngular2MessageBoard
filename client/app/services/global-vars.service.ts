import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsService {    
    constructor() { }

    //Seconds between api calls to refresh the notes on the page
    public timeOfRefresh = 3; 
}