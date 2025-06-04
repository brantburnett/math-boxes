
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

const style = window.document.createElement('style');
style.innerHTML = `
  .mat-theme-loaded-marker {
    display: none;
}`;
window.document.head.appendChild(style);
