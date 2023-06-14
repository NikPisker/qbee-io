import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { IndicatorHighlightDirective } from './directives/indicator-highlight/indicator-highlight.directive';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    IndicatorHighlightDirective,
  ],
  exports: [
    HeaderComponent,
    IndicatorHighlightDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
