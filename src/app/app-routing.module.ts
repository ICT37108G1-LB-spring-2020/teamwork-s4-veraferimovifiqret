import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { ShoeComponent } from './shoe/shoe.component';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { EditShoeComponent } from './edit-shoe/edit-shoe.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'shoe/:id', component: ShoeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddShoeComponent },
  { path: 'admin/edit/:id', component: EditShoeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
