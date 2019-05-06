export class Coordinate {
    private static _offset = {x: 0, y: 0};
    private static _origin = {x: 0, y: 0};
    private static _scale = 1;
    private static _pixelPerMeter = 1;

    private _x: number;
    private _y: number;

    constructor() {
        this._x = 0;
        this._y = 0;
    }

    public static set scale(s: number) {
        this._scale = s;
    }

    public static get scale(): number {
        return Coordinate._scale;
    }

    public static get offset(): {x: number, y: number} {
        return this._offset;
    }

    public static set offset(coord: {x: number, y: number}) {
        this._offset = coord;
    }

    public get inPixel(): {x: number, y: number} {
        return {x: this._x, y: this._y};
    }

    public set inPixel(coord: {x: number, y: number}) {
        this._x = coord.x;
        this._y = coord.y;
    }

    public get inMeter(): {x: number, y: number} {
        return {x: this._x / Coordinate._pixelPerMeter, y: this._y / Coordinate._pixelPerMeter};
    }

    public set inMeter(coord: {x: number, y: number}) {
        this._x = coord.x * Coordinate._pixelPerMeter;
        this._y = coord.y * Coordinate._pixelPerMeter;
    }

    public get inCanvas(): {x: number, y: number} {
        return {x: (this._x + Coordinate._offset.x) * Coordinate._scale, y: (this._y + Coordinate._offset.y) * Coordinate._scale};
    }

    public set inCanvas(coord: {x: number, y: number}) {
        this._x = (coord.x - Coordinate._offset.x) / Coordinate._scale;
        this._y = (coord.y - Coordinate._offset.y) / Coordinate._scale;
    }
}
