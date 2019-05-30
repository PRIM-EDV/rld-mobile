import { Component, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    }

    public switchTab(tab: Tab) {
        this._activeTab = tab;
    }

    ngAfterViewInit() {
        this._menu.enable(false);
    }
}
