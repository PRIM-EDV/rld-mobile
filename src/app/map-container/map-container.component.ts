import { Component, AfterViewInit } from '@angular/core';
import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'map-container',
    template:  `<map style="height: 100%; width: 100%" [_backend]="backend"></map>`

})

export class MapContainerComponent implements AfterViewInit {
    constructor(private _menu: MenuController, public backend: BluetoothBackendService) {
        console.log(this.backend);
    }

    ngAfterViewInit() {
        this._menu.enable(true);
    }
}
