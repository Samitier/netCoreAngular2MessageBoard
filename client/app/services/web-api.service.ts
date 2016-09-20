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

    putMessage(message) {
       return this._http.put(this._apiUrl + 'messages' + "/" + message.id, message); 
    }

    postMessage(message) { 
       return this._http.post(this._apiUrl + 'messages', message); 
    }

    deleteMessage(id) { 

    }
}