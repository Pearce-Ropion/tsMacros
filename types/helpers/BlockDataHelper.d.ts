import * as Java from "../java";
import * as Minecraft from "../minecraft";

import BlockPosHelper from "./BlockPosHelper";

declare class BlockDataHelper extends Java.JObject {
    constructor(b: Minecraft.BlockState, e: Minecraft.BlockEntity, bp: Minecraft.BlockPos);

    getBlockPos(): BlockPosHelper;
    getBlockState(): Map<string, string>;
    getId(): string;
    getName(): string;
    getNBT(): Map<string, string>;
    getRawBlock(): Minecraft.Block;
    getRawBlockEntity(): Minecraft.BlockEntity;
    getRawBlockState(): Minecraft.BlockState;
    getX(): number;
    getY(): number;
    getZ(): number;
    toString(): string;
}

export default BlockDataHelper;
