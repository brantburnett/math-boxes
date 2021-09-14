import 'jest-preset-angular/setup-jest';

const style = window.document.createElement('style');
style.innerHTML = `
  .mat-theme-loaded-marker {
    display: none;
}`;
window.document.head.appendChild(style);
