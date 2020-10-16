import * as Minecraft from "../minecraft";

import EntityHelper from "./EntityHelper";
import ItemStackHelper from "./ItemStackHelper";
import StatusEffectHelper from "./StatusEffectHelper";

declare class LivingEntityHelper extends EntityHelper {
    constructor(e: Minecraft.LivingEntity);

    getChestArmor(): ItemStackHelper;
    getFootArmor(): ItemStackHelper;
    getHeadArmor(): ItemStackHelper;
    getLegArmor(): ItemStackHelper;
    getMainHand(): ItemStackHelper;
    getOffHand(): ItemStackHelper;
    getStatusEffects(): StatusEffectHelper[];
    isSleeping(): boolean;
}

export default LivingEntityHelper;
