import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsService {    
    constructor() { }

    //Seconds between api calls to refresh the notes on the page
    public timeOfRefresh = 3; 

    //Maximum rotation of a message on the board (in deg)
    public maxMessageRotation = 14;

    //message offset from creation button
    public offsetLeft = 160;
    public offsetTop = 190;
}