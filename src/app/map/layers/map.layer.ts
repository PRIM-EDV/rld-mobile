import { Layer } from './layer';
import { MapFile } from '../utils/map.util';
import { Coordinate } from '../backend/utils/coordinate.util';

export class MapLayer extends Layer {
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _mapfile: MapFile = null;
    private _origin: Coordinate = new Coordinate();
    private _viewport: Coordinate = new Coordinate();

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mapfile: MapFile) {
        super();

        this._canvas = canvas;
        this._ctx = ctx;
        this._mapfile = mapfile;
        this._origin.inPixel = {x: 0, y: 0};
        this._viewport.inPixel = {x: this._canvas.width, y: this._canvas.height};
    }

    public draw() {
        for (const map of this._mapfile.layers) {
            if (map.active) {
                this._ctx.drawImage(map.image, this._origin.inCanvas.x, this._origin.inCanvas.y,  this._canvas.width, this._canvas.height, 0, 0, this._canvas.width, this._canvas.height);
            }
        }
    }

    public onPan(e: HammerInput, offset: {x: number, y: number}) {
        if (e.maxPointers === 1) {
            Coordinate.offset = {
                x: offset.x - e.deltaX * Coordinate.scale, // Math.max(Math.min(0, this.mx), Math.min(Math.max(0, this.mx), offset.x - e.deltaX * Coordinate.scale)),
                y: offset.y - e.deltaY * Coordinate.scale// Math.max(Math.min(0, this.my), Math.min(Math.max(0, this.my), offset.y - e.deltaY * Coordinate.scale
            };
        }
    }

    public onPinch(e: HammerInput, pinch: number, center: {x: number, y: number}) {
        Coordinate.scale = Math.max(0.75, pinch * (1 / e.scale));

        // this.mx = this.maps[0].width  - this.canvas.width * this.zoom;
        // this.my = this.maps[0].height - this.canvas.height * this.zoom;
        // this.sx = Math.max(Math.min(0, this.mx), Math.min(Math.max(0, this.mx), px + (centerX * pinch - centerX * this.zoom)));
        // this.sy = Math.max(Math.min(0, this.my), Math.min(Math.max(0, this.my), py + (centerY * pinch - centerY * this.zoom)));
    }
}
