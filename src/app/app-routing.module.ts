import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertListComponent } from './components/admin/concert-list/concert-list.component';
import { ConcertsComponent } from './components/concerts/concerts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ConcertsComponent },
  { path: 'admin', component: ConcertListComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
