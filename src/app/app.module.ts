import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardComponent} from './components/card/card.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {ThemePickerComponent} from './components/theme-picker/theme-picker.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavigationComponent,
    ThemePickerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
