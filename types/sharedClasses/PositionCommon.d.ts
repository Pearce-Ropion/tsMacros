import * as Java from "../java";

declare namespace PositonCommon {
    class Pos2D extends Java.JObject {
        constructor(x: number, y: number);

        x: number;
        y: number;

        getX(): number;
        getY(): number;
        toString(): string;
    }

    class Pos3D extends Java.JObject {
        constructor(x: number, y: number, z: number);

        x: number;
        y: number;
        z: number;

        getX(): number;
        getY(): number;
        getZ(): number;
        toString(): string;
    }

    class Vec2D extends Java.JObject {
        constructor(x1: number, y1: number, x2: number, y2: number);

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        toString(): string;
    }

    class Vec3D extends Java.JObject {
        constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);

        x1: number;
        y1: number;
        z1: number;
        x2: number;
        y2: number;
        z2: number;

        toString(): string;
    }
}

export default PositonCommon;