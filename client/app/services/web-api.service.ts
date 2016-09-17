import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service.ts';

@Injectable()

export class WebApiService {

    private _apiUrl = "/api/";

    constructor(
        private _http: AppHttpService
    ) {}

    getMessages() { 
        return this._http.get(this._apiUrl + 'messages');   
    }

    putMessae(message) {
        
    }

    postMessagemessage() { 
        
    }

    deleteMessage(id) { 
        
    }
}