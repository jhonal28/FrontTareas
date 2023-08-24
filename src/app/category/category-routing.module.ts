import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'category', redirectTo: 'category/list', pathMatch: 'full'},
  { path: 'category/list', component: ListComponent },
  { path: 'category/create', component: CreateComponent },
  { path: 'category/:categoryId/edit', component: EditComponent },
  { path: '**', redirectTo: 'category/list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
