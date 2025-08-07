import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyHttpService } from './my-http-service';
import { HttpClientModule } from '@angular/common/http';
import { RxSubjectTypeDemo } from './rx-subject-type-demo/rx-subject-type-demo';

@NgModule({
  declarations: [
    App,
    RxSubjectTypeDemo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MyHttpService,
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
