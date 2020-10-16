import * as Minecraft from "../minecraft";

import ItemStackHelper from "./ItemStackHelper";
import LivingEntityHelper from "./LivingEntityHelper"
import PlayerAbilitiesHelper from "./PlayerAbilitiesHelper";

declare class PlayerEntityHelper extends LivingEntityHelper {
    constructor(e: Minecraft.PlayerEntity);

    getAbilities(): PlayerAbilitiesHelper;
    getChestArmor(): ItemStackHelper;
    getFootArmor(): ItemStackHelper;
    getHeadArmor(): ItemStackHelper;
    getLegArmor(): ItemStackHelper;
    getMainHand(): ItemStackHelper;
    getOffHand(): ItemStackHelper;
    getRaw(): Minecraft.PlayerEntity;
    getXP(): number;
    isSleeping(): boolean;
    isSleepingLongEnough(): boolean;
    toString(): string;
}

export default PlayerEntityHelper;
