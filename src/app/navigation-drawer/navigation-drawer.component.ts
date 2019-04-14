import { Component } from '@angular/core';

interface DrawerListItem {
    icon : string;
    name: string;
    destination: string;
}

@Component({
  selector: 'navigation-drawer',
  styleUrls: ['./navigation-drawer.component.scss'],
  templateUrl: './navigation-drawer.component.html'
})
export class NavigationDrawerComponent {
    private items : Array<DrawerListItem> = [];

    constructor() {
        this.items = [
            {name : "Map", icon : "map.png", destination : ""},
            {name : "MAP", icon : "map.png", destination : ""},
            {name : "CALIBRATION", icon : "map.png", destination : ""},
            {name : "Calibration", icon : "map.png", destination : ""},
            {name : "Device", icon : "map.png", destination : ""},
        ]
    }
}
