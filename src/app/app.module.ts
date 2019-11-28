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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
