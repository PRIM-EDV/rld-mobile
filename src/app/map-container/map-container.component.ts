import { Component, AfterViewInit } from '@angular/core';
import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'map-container',
    template:  `<map [_backend]="backend"></map>`

})

export class MapContainerComponent implements AfterViewInit {
    constructor(private _menu: MenuController, public backend: BluetoothBackendService) {
    }

    ngAfterViewInit() {
        this._menu.enable(true);
    }
}
