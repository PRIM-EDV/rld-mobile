import { BackendService, MapObject } from "./backend.service";
import { Bluetooth, BluetoothData } from "./utils/bluetooth.util";
import { Coordinate } from "./utils/coordinate.util";


export class BluetoothBackendService extends BackendService {

    constructor(private bluetooth: Bluetooth) {
        super();
    }

    public setMapObject(id?: string) {

    }

    public getMapObject(id: string): MapObject {
        return {id: "", coord: new Coordinate()}
    }

    public connectToDevice(address: string){
        this.bluetooth.connect(address, this.handleBluetooth) // maybe bindcall
    }

    public getBondedDevices(callback: (data: any) => void){
        this.bluetooth.getBondedDevices(callback)
    }

    private handleBluetooth(data: BluetoothData){
        
    }
}