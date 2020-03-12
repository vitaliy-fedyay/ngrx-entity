import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { OneComponent } from './components/one/one.component';

const routes: Routes = [
  { path: 'edit', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'one', component: OneComponent },
  { path: '', component: ListComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
