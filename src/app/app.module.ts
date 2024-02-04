import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
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
import { APP_BASE_HREF } from '@angular/common';
import { ThreeDigitSubtractionComponent } from './three-digit-subtraction/three-digit-subtraction.component';

@NgModule({
  declarations: [
    AppComponent,
    DecimalGridComponent,
    DecimalGridSetComponent,
    EmojiSelectorComponent,
    MultiplicationComponent,
    PyroComponent,
    MultiplicationFactsComponent,
    ThreeDigitSubtractionComponent
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
    MatSlideToggleModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseHref }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
