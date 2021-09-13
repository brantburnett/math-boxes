import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiplicationComponent } from './multiplication/multiplication.component';

const routes: Routes = [
  { path: 'multiplication', component: MultiplicationComponent },
  { path: '', redirectTo: '/multiplication', pathMatch: 'full' },
  { path: '**', redirectTo: '/multiplication', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
