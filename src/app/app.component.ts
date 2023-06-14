import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { Device } from './core/models/device.model';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  links = [
    { link: 'home', displayName: 'Home' },
    { link: 'devices', displayName: 'Devices' },
    { link: 'support', displayName: 'Support' },
  ];
  private onDestroy$ = new Subject();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.apiService.getDevices()
      .pipe(
        tap((devices: Device[]) => {
          this.saveJson(devices);
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  saveJson(devices: Device[]): void {
    if (!localStorage.getItem('devices')) {
      localStorage.setItem('devices', JSON.stringify(devices));
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
