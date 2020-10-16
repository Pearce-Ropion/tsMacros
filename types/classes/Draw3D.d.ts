import * as Java from "../java";

import PositonCommon from "../sharedClasses/PositionCommon";

declare class Draw3D extends Java.JObject {
    constructor();
    
    addBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, fillColor: number, fill: boolean): Draw3D.Box;
    addBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, fillColor: number, fillAlpha: number, fill: boolean): Draw3D.Box;
    addLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number): Draw3D.Line;
    addLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, alpha: number): Draw3D.Line;
    getBoxes(): Draw3D.Box[];
    getLines(): Draw3D.Line[];
    removeBox(b: Draw3D.Box): Draw3D;
    removeLine(l: Draw3D.Line): Draw3D;
    render(): void;
}

declare namespace Draw3D {
    class Box extends Java.JObject {
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, fillColor: number, fill: boolean);
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, fillColor: number, fillAlpha: number, fill: boolean);

        color: number;
        fill: boolean;
        fillColor: number;
        pos: PositonCommon.Vec3D;

        render(): void;
        setAlpha(alpha: number): void;
        setColor(color: number): void;
        setColor(color: number, alpha: number): void;
        setFill(fill: boolean): void;
        setFillAlpha(alpha: number): void;
        setFillColor(fillColor: number): void;
        setFillColor(fillCOlor: number, alpha: number): void;
        setPos(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }

    class Line extends Java.JObject {
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number);
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, alpha: number);

        color: number;
        pos: PositonCommon.Vec3D;

        render(): void;
        setAlpha(alpha: number): void;
        setColor(color: number): void;
        setColor(color: number, alpha: number): void;
        setPos(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }
}

export default Draw3D;