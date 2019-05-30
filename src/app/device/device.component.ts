import {Component} from '@angular/core';
// import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';

@Component({
    selector: 'device',
    styleUrls: ['./device.component.scss'],
    templateUrl: 'device.component.html',

})
export class DeviceComponent {
    private _bondedDevices: any[] = [];

    // constructor(private _bluetoohBackend: BluetoothBackendService) {
    //     this._bluetoohBackend.getBondedDevices((devices) => {
    //         this._bondedDevices = devices;
    //     });
    // }
}
