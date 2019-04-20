import { Component } from '@angular/core';

interface Page {
    icon: string;
    name: string;
    destination: string;
}

@Component({
  selector: 'navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss'],
  templateUrl: './navigation-drawer.component.html'
})
export class NavigationDrawerComponent {
    private _pages: Array<Page> = [];

    constructor() {
        this._pages = [
            {name : 'Tracking', icon: 'satellite.png', destination: ''},
            {name : 'Device', icon: 'device.png', destination : ''},
        ];
    }
}
