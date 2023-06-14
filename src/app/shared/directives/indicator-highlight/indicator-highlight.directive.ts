import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appIndicatorHighlight]'
})
export class IndicatorHighlightDirective {
  @Input() appIndicatorHighlight: string;
  @HostBinding('class.indicator__red') get redDescription() {
    return this.appIndicatorHighlight.length < 50;
  }
  @HostBinding('class.indicator__yellow') get yellowDescription() {
    return this.appIndicatorHighlight.length > 50 && this.appIndicatorHighlight.length < 100;
  }
  @HostBinding('class.indicator__green') get greenDescription() {
    return this.appIndicatorHighlight.length >= 100;
  }
}
