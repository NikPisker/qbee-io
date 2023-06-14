import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  localStorageId = 'devices';
  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>('assets/devices.json')
  }

  getJSONDevices(): Device[] {
    return JSON.parse(<string>localStorage.getItem(this.localStorageId));
  }

  getDeviceByIndex(index: number): Device {
    return JSON.parse(<string>localStorage.getItem(this.localStorageId))[index];
  }

  updateDevice(index: number, payload: Device): void {
    const devices = JSON.parse(<string>localStorage.getItem(this.localStorageId));
    devices[index] = payload;
    localStorage.setItem(this.localStorageId, JSON.stringify(devices));
  }
}
