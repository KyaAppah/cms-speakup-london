import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoComponent }      from './two/two.component';
import { OneComponent }      from './one/one.component';
import { ThreeComponent }      from './three/three.component';
import { InstaComponent }      from './insta/insta.component';

const routes: Routes = [
 { path: 'two', component: TwoComponent },
 { path: 'one', component: OneComponent },
 { path: 'three', component: ThreeComponent },
 { path: 'insta', component: InstaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
