import { Component, AfterViewInit, Input, ViewChild, AfterContentInit, SimpleChanges, OnChanges } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { DeviceComponent } from '../device/device.component';
import { CalibrationComponent } from '../calibration/calibration.component';

interface Tab {
    label: string;
    target: string;
}

@Component({
    selector: 'configuration',
    styleUrls: ['./configuration.component.scss'],
    templateUrl: 'configuration.component.html',

})
export class ConfigurationComponent implements AfterContentInit, OnChanges {
    @ViewChild(DeviceComponent, {static: true}) public deviceComponent: DeviceComponent;
    @ViewChild(CalibrationComponent, {static: true}) public calibrationComponent: CalibrationComponent;

    private _activeTab = {label: 'DEVICE', target: 'device'};
    private _tabs: Array<Tab> = [
        {label: 'DEVICE', target: 'device'},
        {label: 'CALIBRATION', target: 'calibration'},
        {label: 'PLACEHOLDER', target: ''},
    ];

    constructor(private _router: Router, private _menu: MenuController) {
    }

    public goBack() {
        console.log('back');
        this._router.navigate(['/home']);
        this._menu.enable(true);
    }

    public switchTab(tab: Tab) {
        this._activeTab = tab;

        switch (tab.target) {
            case 'device': {
                this.deviceComponent.open();
                break;
            }
            case 'calibration' : {
                this.calibrationComponent.open();
            }
        }
    }

    ngAfterContentInit() {
        this._menu.enable(false);
    }

    ngOnChanges(changes: SimpleChanges) {

    }
}
