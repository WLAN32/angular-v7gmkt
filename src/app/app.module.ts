import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SabwCaesarComponent } from './sabw-caesar/sabw-caesar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SabwCaesarComponent ],
  bootstrap:    [ AppComponent, SabwCaesarComponent ]
})
export class AppModule { }
