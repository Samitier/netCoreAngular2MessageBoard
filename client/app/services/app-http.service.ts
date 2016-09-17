import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()

export class AppHttpService {

    private _headers:Headers;
    private _options:RequestOptions;

    private _extractData(response) {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        }
        let body = response.json();
        return body || {};
    }

    private _handleError(error) {
        let errMsg = "API error -> " + error.json().message;
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    private _buildJSON(message) {
        let obj = {};
        if (message.controls) {
            for (var property in message.controls) {
                if (message.controls.hasOwnProperty(property)) {
                    obj[property] = message.controls[property]._value;
                }
            }
            return JSON.stringify(obj);
        }
        else return JSON.stringify(message);
    }

    private _onInit() {
        this._headers = new Headers({'Content-Type': 'application/json'});
        this._options = new RequestOptions({headers: this._headers});
    }

    constructor(private _http:Http) {
        this._onInit();
    }

    get(route) {
        return this._http.get(route, this._options)
            .toPromise()
            .then(this._extractData)
            .catch(this._handleError);
    }

    put(route, message) {
        return this._http.put(route, this._buildJSON(message), this._options)
            .toPromise()
            .then(this._extractData)
            .catch(this._handleError);
    }

    post(route, message) {
        let json = this._buildJSON(message);
        return this._http.post(route, json, this._options)
            .toPromise()
            .then(this._extractData)
            .catch(this._handleError);
    }
}