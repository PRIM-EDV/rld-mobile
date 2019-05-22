import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { DeviceComponent } from '../device/device.component';
import { DeviceModule } from '../device/device.module';

@NgModule({
    imports: [
        CommonModule,
        DeviceModule,
        RouterModule.forChild([
            {
              path: '',
              component: ConfigurationComponent,
              children: [
                  {path: 'device', component: DeviceComponent}
              ]
            }
          ])
    ],
    declarations: [ConfigurationComponent],
    exports: [ConfigurationComponent],
})
export class ConfigurationModule {}
