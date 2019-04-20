import { Coordinate } from '../backend/utils/coordinate.util';

export interface MapData {
    image: HTMLImageElement;
    imageUrl: string;
    origin: Coordinate;
    resolution: [number, number];
    active?: boolean;
}

export class MapFile {
    public layers: [MapData];
    public name: string;
}

