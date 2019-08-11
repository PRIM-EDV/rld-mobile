import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { DeviceComponent } from '../device/device.component';

interface Tab {
    label: string;
    target: string;
}

@Component({
    selector: 'configuration',
    styleUrls: ['./configuration.component.scss'],
    templateUrl: 'configuration.component.html',

})
export class ConfigurationComponent implements AfterViewInit {
    @ViewChild(DeviceComponent, {static: true}) public deviceComponent: DeviceComponent;

    private _activeTab = {label: 'DEVICE', target: 'device'};
    private _tabs: Array<Tab> = [
        {label: 'DEVICE', target: 'device'},
        {label: 'CALIBRATION', target: 'calibration'},
        {label: 'PLACEHOLDER', target: ''},
    ];

    constructor(private _router: Router, private _menu: MenuController) {
    }

    public back() {
        this._router.navigate(['/home']);
        this._menu.enable(true);
    }

    public switchTab(tab: Tab) {
        this._activeTab = tab;

        switch (tab.target) {
            case 'device': {
                this.deviceComponent.open();
            }
        }
    }

    ngAfterViewInit() {
        this._menu.enable(false);
    }
}
