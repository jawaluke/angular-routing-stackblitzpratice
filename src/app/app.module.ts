import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouteModule } from './route/route.module';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';
import { Com3Component } from './components/com3/com3.component';
import { Com4Component } from './components/com4/com4.component';
import { Com5Component } from './components/com5/com5.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouteModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Com1Component,
    Com2Component,
    Com3Component,
    Com4Component,
    Com5Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
