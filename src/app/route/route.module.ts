import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com1Component } from '../components/com1/com1.component';
import { Com2Component } from '../components/com2/com2.component';
import { Com3Component } from '../components/com3/com3.component';
import { Com4Component } from '../components/com4/com4.component';
import { Com5Component } from '../components/com5/com5.component';

const routes: Routes = [
  {
    path: 'com1',
    component: Com1Component,
    outlet: 'coms',
  },
  { path: 'com2', component: Com2Component },
  {
    path: 'com3',
    component: Com3Component,
    children: [{ path: 'com5', component: Com5Component, outlet: 'com5s' }],
  },
  { path: 'com4', component: Com4Component, outlet: 'com4s' },
  { path: 'com5', component: Com5Component, outlet: 'com4s' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule {}
