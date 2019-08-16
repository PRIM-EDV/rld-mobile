import {Component, ViewChild, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef} from '@angular/core';
import { BluetoothBackendService } from '../map/backend/bluetooth-backend.service';
import { MapComponent } from '../map/map.component';
import { Coordinate } from '../map/backend/utils/coordinate.util';
import { DeviceConfigService } from '../map/backend/utils/device-config.service';

@Component({
    selector: 'calibration',
    styleUrls: ['./calibration.component.scss'],
    templateUrl: 'calibration.component.html',

})
export class CalibrationComponent implements AfterViewInit, AfterViewChecked {

    @ViewChild(MapComponent, {static: true})
    public map: MapComponent;

    constructor(private _element: ElementRef, public backend: BluetoothBackendService, private _deviceConfig: DeviceConfigService) {

    }

    public open() {
        // console.log('WTF?');
        // console.log(this.map);
        // const mapObject = this.backend.getMapObject(String(0));
        // console.log(mapObject);
        // this.map.resize();
        // this.map.update();
        // this.map.centerToMapObject(mapObject);
    }

    public move(vec: {x: number, y: number}) {
        console.log(vec);
        this.backend.getMapObjects().forEach((mapObject) => {
            mapObject.coord.inPixel = {
                x: mapObject.coord.inPixel.x + vec.x,
                y: mapObject.coord.inPixel.y + vec.y
            };
        });

        Coordinate._origin.x += vec.x;
        Coordinate._origin.y += vec.y;

        this._deviceConfig.updateConfig({origin: Coordinate._origin});
        console.log(this.backend.getMapObject(String(0)).coord);

        this.map.centerToMapObject(this.backend.getMapObject(String(0)));
        this.map.update();
    }

    ngAfterViewInit() {
        const mapObject = this.backend.getMapObject(String(0));
        const mo = new MutationObserver(() => {
            this.map.centerToMapObject(mapObject);
            this.map.resize();
        });

        mo.observe(this._element.nativeElement, {attributes: true, attributeFilter: ['class']});
    }

    ngAfterViewChecked() {

    }
}
