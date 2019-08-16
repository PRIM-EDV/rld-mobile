import {NgModule} from '@angular/core';
import {CalibrationComponent} from './calibration.component';
import { MapModule } from '../map/map.module';

@NgModule({
    imports: [MapModule],
    declarations: [CalibrationComponent],
    exports: [CalibrationComponent],
})
export class CalibrationModule {}
