import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestGridComponent} from './test.grid/test.grid.component';


const routes: Routes = [
  {
    path: 'grid',
    component: TestGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 