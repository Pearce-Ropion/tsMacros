import * as Java from "../java";
import * as Minecraft from "../minecraft";

declare class BlockPosHelper extends Java.JObject {
    constructor(b: Minecraft.BlockPos);

    getX(): number;
    getY(): number;
    getZ(): number;
    toString(): string;
}

export default BlockPosHelper;
