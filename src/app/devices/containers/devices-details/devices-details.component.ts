import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Device } from '../../../core/models/device.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-devices-details',
  templateUrl: './devices-details.component.html',
  styleUrls: ['./devices-details.component.scss']
})
export class DevicesDetailsComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  device: Device | undefined;
  deviceIndex: number;
  tags: string[] = [];
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    tags: new FormControl([]),
    description: new FormControl(''),
  });
  addOnBlur = true;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.deviceIndex = +this.aRoute.snapshot.url[0].path;
    this.getDevice();
  }

  getDevice(): void {
    this.device = this.apiService.getDeviceByIndex(this.deviceIndex);
    this.tags = this.device?.tags || [];
    this.initForm();
  }

  initForm(): void {
    if (this.device) {
      this.form.patchValue(this.device);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing tag
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
  }

  close(): void {
    this.router.navigate(['devices']);
  }

  save(value: Device): void {
    this.apiService.updateDevice(this.deviceIndex, value);
    this.snackBar.open('The device was saved successfully', 'Ok')
    this.close();
  }
}
