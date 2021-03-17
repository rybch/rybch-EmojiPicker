import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';

@NgModule({
  declarations: [
    AppComponent, EmojiPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
