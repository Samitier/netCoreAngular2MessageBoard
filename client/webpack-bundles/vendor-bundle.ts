declare function require(name:string);
declare var window:any;
declare var $:any;


require("../styles/bootstrap.css");
require("../styles/bootstrap-material-design.css");
require("snackbarjs/dist/snackbar.min.css")
require("../styles/style.css");

window.$ = window.jQuery = require('jquery');
require("../node_modules/bootstrap/dist/js/bootstrap.min.js");
require("../node_modules/bootstrap-material-design/dist/js/material.min.js");
require("../node_modules/bootstrap-material-design/dist/js/ripples.min.js");
require('snackbarjs');

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router-deprecated';

// RxJS
import 'rxjs/add/operator/toPromise';

$(function() {
    $.material.init();
});