import * as Java from "../java";
import * as Minecraft from "../minecraft";

declare class ItemStackHelper extends Java.JObject {
    constructor(i: Minecraft.ItemStack);

    copy(): ItemStackHelper;
    equals(is: Minecraft.ItemStack | ItemStackHelper): boolean;
    getCount(): number;
    getCreativeTab(): string;
    getDamage(): number;
    getDefaultName(): string;
    getItemID(): string;
    getMaxCount(): number;
    getMaxDamage(): number;
    getName(): string;
    getNBT(): string;
    getRaw(): Minecraft.ItemStack;
    isDamageable(): boolean;
    isEmpty(): boolean;
    isEnchantable(): boolean;
    isItemEqual(is: Minecraft.ItemStack | ItemStackHelper): boolean;
    isItemEqualIgnoreDamage(is: Minecraft.ItemStack | ItemStackHelper): boolean;
    isNBTEqual(is: Minecraft.ItemStack | ItemStackHelper);
    setDamage(damage: number): ItemStackHelper;
    toString(): string;
}

export default ItemStackHelper;
