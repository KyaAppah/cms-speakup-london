import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoComponent }      from './two/two.component';
import { OneComponent }      from './one/one.component';

const routes: Routes = [
 { path: 'two', component: TwoComponent },
 { path: 'one', component: OneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
