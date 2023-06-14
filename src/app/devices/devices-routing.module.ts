import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesListComponent } from './containers/devices-list/devices-list.component';
import { DevicesDetailsComponent } from './containers/devices-details/devices-details.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesListComponent
  },
  {
    path: 'details',
    children: [
      {
        path: ':index',
        component: DevicesDetailsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
