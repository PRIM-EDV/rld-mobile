import * as Hammer from 'hammerjs';

export abstract class Layer {
    public abstract draw();

    public onPanStart(e: HammerInput) {}
    public onPan(e: HammerInput, offset: {x: number, y: number}) {}
    public onPinchStart(e: HammerInput) {}
    public onPinch(e: HammerInput, pinch: number) {}
}
