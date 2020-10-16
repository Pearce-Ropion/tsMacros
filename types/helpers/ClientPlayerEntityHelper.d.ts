import * as Minecraft from "../minecraft";

import PlayerEntityHelper from "./PlayerEntityHelper";

declare class ClientPlayerEntityHelper extends PlayerEntityHelper {
    constructor(e: Minecraft.ClientPlayerEntity);

    getFoodLevel(): number;
    getRaw(): Minecraft.ClientPlayerEntity;
    lookAt(yaw: number, pitch: number): ClientPlayerEntityHelper;
    toString(): string;
}

export default ClientPlayerEntityHelper;
