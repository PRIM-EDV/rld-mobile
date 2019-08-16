import { Component, AfterContentInit } from '@angular/core';
import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';
// import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';

@Component({
    selector: 'device',
    styleUrls: ['./device.component.scss'],
    templateUrl: 'device.component.html',

})
export class DeviceComponent implements AfterContentInit {
    private _activeDevice: any = null;
    private _bondedDevices: any[] = [];

    private _connectingDevice: any = {id: '', status: ''};

    constructor(private _backend: BluetoothBackendService) {
        this._backend.onDisconnect(this._handleDisconnect.bind(this));
        this._backend.onConnect((device) => {
            this._activeDevice = device;
            this._syncDevices();
        });
    }

    public async connect(id: string) {
        this._connectingDevice = {
            id: id,
            status: 'connecting...'
        };
        try {
            this._activeDevice = await this._backend.connectToDevice(id);
            this._connectingDevice.status = 'connection established';
            this._syncDevices();
        } catch {
            this._connectingDevice.status = 'connection failed';
        }
    }

    public async open() {

    }

    ngAfterContentInit() {
        if (this._backend.getActiveDevice()) {
            this._activeDevice = this._backend.getActiveDevice();
        }

        this._syncDevices();
    }

    private _syncDevices() {
        this._backend.getBondedDevices().then( (devices) => {
            if (this._activeDevice) {
                this._bondedDevices = devices.filter( (device) => device.id != this._activeDevice.id);
            } else {
                this._bondedDevices = devices;
            }
        });
    }

    private _handleDisconnect() {
        this._activeDevice = null;
    }

}
