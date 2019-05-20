import { Component } from '@angular/core';
import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';

@Component({
    selector: 'map-container',
    template:  `<map [_backend]="backend"></map>`

})

export class MapContainerComponent {
    constructor(public backend: BluetoothBackendService) {
    }
}
