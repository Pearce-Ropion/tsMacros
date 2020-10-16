import * as Java from "../java";
import * as Minecraft from "../minecraft";

import PositonCommon from "../sharedClasses/PositionCommon";

declare class EntityHelper extends Java.JObject {
    constructor(e: Minecraft.Entity);
    create(e: Minecraft.Entity): EntityHelper

    getName(): string;
    getNBT(): string;
    getPassengers(): EntityHelper[];
    getPitch(): number;
    getPos(): PositonCommon.Pos3D;
    getRaw(): Minecraft.Entity;
    getType(): string;
    getVehicle(): EntityHelper;
    getX(): number;
    getY(): number;
    getZ(): number;
    isGlowing(): boolean;
    isInLava(): boolean;
    isOnFire(): boolean;

    /**
     * Sets whether the entity is glowing
     */
    setIsGlowing(val: boolean): EntityHelper;
    toString(): string;
}

export default EntityHelper;
