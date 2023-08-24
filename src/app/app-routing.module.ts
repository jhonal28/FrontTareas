import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './category/list/list.component';
import { CreateComponent } from './category/create/create.component';
import { EditComponent } from './category/edit/edit.component';

const routes: Routes = [
  { path: 'category', redirectTo: 'category/list', pathMatch: 'full'},
  { path: 'category/list', component: ListComponent },
  { path: 'category/create', component: CreateComponent },
  { path: 'category/:categoryId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
