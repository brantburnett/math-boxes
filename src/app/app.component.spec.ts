import { TestBed, waitForAsync } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UpdateService } from './update-service';

const mockUpdateService: Partial<UpdateService> = {
  checkForUpdates: () => { },
  ngOnDestroy: () => { }
}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule        
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: UpdateService,
          useValue: mockUpdateService
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
