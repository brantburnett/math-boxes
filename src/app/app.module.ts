import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalGridComponent } from './decimal-grid/decimal-grid.component';
import { DecimalGridSetComponent } from './decimal-grid-set/decimal-grid-set.component';
import { EmojiSelectorComponent } from './emoji-selector/emoji-selector.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PyroComponent } from './pyro/pyro.component';

@NgModule({
  declarations: [
    AppComponent,
    DecimalGridComponent,
    DecimalGridSetComponent,
    EmojiSelectorComponent,
    MultiplicationComponent,
    PyroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
