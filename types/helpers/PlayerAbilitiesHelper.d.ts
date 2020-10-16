import * as Java from "../java";
import * as Minecraft from "../minecraft";

declare class PlayerAbilitiesHelper extends Java.JObject {
    constructor(a: Minecraft.PlayerAbilities);

    getAllowFlying(): boolean;
    getCreativeMode(): boolean;
    getFlying(): boolean;
    getFlySpeed(): number;
    getInvulnerable(): boolean;
    getRaw(): Minecraft.PlayerAbilities;

    /**
     * Set the player allow flying state
     */
    setAllowFlying(b: boolean): PlayerAbilitiesHelper;

    /**
     * Set the player flying state
     */
    setFlying(b: boolean): PlayerAbilitiesHelper;

    /**
     * Set the player fly speed multiplier
     */
    setFlySpeed(flySpeed: number): PlayerAbilitiesHelper;
}

export default PlayerAbilitiesHelper;
