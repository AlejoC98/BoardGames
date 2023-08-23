import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../components/search/search.component';
import { UserSelectionsComponent } from '../components/user-selections/user-selections.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'Search', component: SearchComponent},
  { path: 'Owned', component: UserSelectionsComponent},
  { path: 'Wishlist', component: UserSelectionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
