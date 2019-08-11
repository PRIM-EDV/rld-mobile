import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceComponent } from './device.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DeviceComponent],
    exports: [DeviceComponent],
})
export class DeviceModule {}
