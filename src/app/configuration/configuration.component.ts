import {Component, AfterViewInit} from '@angular/core';
import { MenuController } from '@ionic/angular';

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
    private _tabs: Array<Tab> = [
        {label: 'DEVICE', target: 'device'},
        {label: 'CALIBRATION', target: 'calibration'},
        {label: 'PLACEHOLDER', target: ''},
    ];

    constructor(private _menu: MenuController) {
    }

    ngAfterViewInit() {
        this._menu.enable(false);
    }
}
