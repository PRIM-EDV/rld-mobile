import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from '../map/map.module';
import { MapContainerComponent } from './map-container.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        MapModule,
        RouterModule.forChild([
            {
              path: '',
              component: MapContainerComponent
            }
          ])
    ],
    declarations: [MapContainerComponent],
    exports: [MapContainerComponent],
})
export class MapContainerModule {}
