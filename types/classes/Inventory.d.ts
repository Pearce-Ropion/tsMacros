import * as Java from "../java";
import * as Minecraft from "../minecraft";

import ItemStackHelper from "../helpers/ItemStackHelper";

declare class Inventory extends Java.JObject {
    constructor();

    /**
     * Clicks a slow with a mouse button
     */
    click(slot: number, mousebutton: number): Inventory;

    /**
     * Closes the inventory, and open gui if applicable
     */
    close(): void;

    /**
     * Closes the inventory (if the incentory/container is visible it willc lose the gui)
     */
    closeAndDrop(): Inventory;

    /**
     * Does a drag-click with a mouse button
     */
    dragClick(slots: number[], mousebutton: number): Inventory;
    getContainerTitle(): string;
    getHeld(): ItemStackHelper;
    getLocation(slotNum: number): string;
    getMap(): Map<string, number[]>;
    getRawContainer(): Minecraft.HandledScreen;
    getSelectedHotbarSlotIndex(): number;
    getSlot(slot: number): ItemStackHelper;
    getSlotUnderMouse(): number;
    getTotalSlots(): number;
    getType(): string;

    /**
     * Does that doublt click on a slot thingy to move all of a type into/out-of a chest
     */
    grabAll(slot: number): Inventory;

    /**
     * Simulates a shift-click on a slot
     */
    quick(slot: number): Inventory;

    setSelectedHotbarSlotIndex(index: number): void;

    /**
     * Splits the held stack into two slots
     */
    split(slot1: number, slot2: number): Inventory;

    /**
     * Swaps the items in two slots
     */
    swap(slot1: number, slot2: number): Inventory;
    toString(): string;
}

export default Inventory;
