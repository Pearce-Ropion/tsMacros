import * as Java from "../java";
import * as Minecraft from "../minecraft";

declare class StatusEffectHelper extends Java.JObject {
    constructor(s: Minecraft.StatusEffectInstance);

    getId(): string;
    getRaw(): Minecraft.StatusEffectInstance;
    getStrength(): number;
    getTime(): number;
}

export default StatusEffectHelper;
