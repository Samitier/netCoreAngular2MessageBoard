import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './directives/message.component.ts'; 
import { DraggableItemDirective } from './directives/draggable-item.directive.ts'; 

import { GlobalVarsService } from './services/global-vars.service.ts';
import { AppHttpService } from './services/app-http.service.ts';
import { WebApiService } from './services/web-api.service.ts';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    MessageComponent,
    DraggableItemDirective
  ],
  providers: [
    GlobalVarsService,
    AppHttpService,
    WebApiService  
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }