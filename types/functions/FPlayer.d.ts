import * as Java from "../java";

import Inventory from "../classes/Inventory";
import Functions from "../extensionBase/Functions";
import BlockDataHelper from "../helpers/BlockDataHelper";
import ClientPlayerEntityHelper from "../helpers/ClientPlayerEntityHelper";
import EntityHelper from "../helpers/EntityHelper";
import TextHelper from "../helpers/TextHelper";
import MethodWrapper from "../extensionBase/MethodWrapper";

declare class FPlayer extends Functions {
    constructor(libName: string, excludeLanguages: string[]);
    
    getGameMode(): string;
    getPlayer(): ClientPlayerEntityHelper;
    openInventory(): Inventory;
    rayTraceBlock(distance: number, fluid: boolean): BlockDataHelper;
    rayTraceEntity(): EntityHelper;

    /**
     * Take a screenshot and save to a file 
     */
    takeScreenshot(folder: string, fileOrCallback: string | MethodWrapper<TextHelper, Java.JObject, Java.JObject>, callback?: MethodWrapper<TextHelper, Java.JObject, Java.JObject>): void;
    
    /**
     * Write to a sign screen if a sign screen is currently open
     */
    writeSign(l1: string, l2: string, l3: string, l4: string): boolean;
}

export default FPlayer;
