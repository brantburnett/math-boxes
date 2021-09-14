import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

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
import { MultiplicationFactsComponent } from './multiplication-facts/multiplication-facts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DecimalGridComponent,
    DecimalGridSetComponent,
    EmojiSelectorComponent,
    MultiplicationComponent,
    PyroComponent,
    MultiplicationFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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