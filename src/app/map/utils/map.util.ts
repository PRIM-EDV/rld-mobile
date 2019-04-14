import { Coordinate } from '../backend/utils/coordinate.util';

export interface MapLayer {
    image: HTMLImageElement;
    imageUrl: string;
    origin: Coordinate;
    resolution: [number, number];
}

export class Map {
    public layers: [MapLayer]
    public name: string
}