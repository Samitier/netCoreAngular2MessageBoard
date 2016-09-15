declare function require(name:string);
declare var window:any;
declare var $:any;

require("../styles/style.less");

window.$ = window.jQuery = require('jquery');
//require("../node_modules/bootstrap/dist/js/bootstrap.min.js");

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs/add/operator/toPromise';
