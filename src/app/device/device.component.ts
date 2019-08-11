import { Component } from '@angular/core';
import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';
// import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';

@Component({
    selector: 'device',
    styleUrls: ['./device.component.scss'],
    templateUrl: 'device.component.html',

})
export class DeviceComponent {
    private _activeDevice: any = null;
    private _bondedDevices: any[] = [];

    private _connectingDevice: any = {id: '', status: ''};

    constructor(private _backend: BluetoothBackendService) {

    }

    public async connect(id: string) {
        this._connectingDevice = {
            id: id,
            status: 'connecting...'
        };
        try {
            this._activeDevice = await this._backend.connectToDevice(id);
            this._connectingDevice.status = 'connection established';
        } catch {
            this._connectingDevice.status = 'connection failed';
        }
    }

    public async open() {
        this._bondedDevices = await this._backend.getBondedDevices();
        console.log(this._bondedDevices);
    }

}
