import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesListComponent } from './containers/devices-list/devices-list.component';
import { DevicesDetailsComponent } from './containers/devices-details/devices-details.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DevicesListComponent,
    DevicesDetailsComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class DevicesModule { }
