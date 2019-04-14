import { BLE } from '@ionic-native/ble';

export interface BluetoothData {
    id: number; 
    px: number; 
    py: number; 
    ts: number
}

export class Bluetooth {

    constructor(private ble: BLE) {}

    private parseSerial(s: string): BluetoothData {
        let data: any = s.split(':');

        let id = data[0];
        let flags = data[1] >> 4;
        let px = ((data[1] & 0x0f) << 6) | ((data[2] & 0xfc) >> 2);
        let py = ((data[2] & 0x03) << 8) | data[3];

        return {id: id, px: px, py: py, ts: Date.now()}
    }

    public getBondedDevices(callback: (data: any) => void): void {
        this.ble.bondedDevices().then(callback)
    }

    public connect(address: string, callback: (data: BluetoothData) => void): void {
        console.log(address);
        this.ble.connect(address).subscribe(
            (d) => {
                console.log(d);
                this.ble.startNotification(address, 'ffe0', 'ffe1').subscribe(
                    (data: ArrayBuffer) => {
                        let s = String.fromCharCode.apply(null, new Uint8Array(data));
                        console.log(s);
                        callback(this.parseSerial(s));
                    }
                );
            }
        );
    }
}