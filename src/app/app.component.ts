import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewEncapsulation, OnDestroy, inject } from '@angular/core';
import { UpdateService } from './update-service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [MatToolbar, MatIconButton, MatIcon, MatSidenavContainer, MatSidenav, MatNavList, MatListItem, RouterLink, MatSidenavContent, RouterOutlet]
})
export class AppComponent implements OnDestroy {
  private serviceWorker = inject(UpdateService);

  mobileQuery: MediaQueryList;

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.serviceWorker.checkForUpdates();
  }

  private mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);

    this.serviceWorker.ngOnDestroy();
  }
}
