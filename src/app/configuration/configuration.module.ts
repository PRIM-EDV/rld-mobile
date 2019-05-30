import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';

import { DeviceModule } from '../device/device.module';
import { CalibrationModule } from '../calibration/calibration.module';

@NgModule({
    imports: [
        CommonModule,
        CalibrationModule,
        DeviceModule,
        RouterModule.forChild([
            {
              path: '',
              component: ConfigurationComponent
            }
          ])
    ],
    declarations: [ConfigurationComponent],
    exports: [ConfigurationComponent],
})
export class ConfigurationModule {}
