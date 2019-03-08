import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoComponent }      from './two/two.component';
import { OneComponent }      from './one/one.component';
import { ThreeComponent }      from './three/three.component';
import { InstaComponent }      from './insta/insta.component';
import { HomeComponent }      from './home/home.component';

const routes: Routes = [
 { path: 'two', component: TwoComponent },
 { path: 'one', component: OneComponent },
 { path: 'three', component: ThreeComponent },
 { path: 'insta', component: InstaComponent },
 { path: ' ', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
