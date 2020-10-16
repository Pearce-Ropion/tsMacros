import * as Java from "../java";

import Functions from "../extensionBase/Functions";

declare class FGlobalVars extends Functions {
    constructor(libName: string, excludeLanguages: string[]);

    globalRaw: Map<string, any>
    getRaw(): Map<string, any>;

    /**
     * Gets a Boolean from the global variable space
     */
    getBoolean(name: string): boolean;

    /**
     * Gets a Double from the global variable space
     */
    getDouble(name: string): number;
    
    /**
     * Gets a Float from the global variable space
     */
    getFloat(name: string): number;
    
    /**
     * Gets a Integer from the global variable space
     */
    getInt(name: string): number;
    
    /**
     * Gets a Object from the global variable space
     */
    getObject(name: string): Object | Java.JObject;
    
    /**
     * Gets a String from the global variable space
     */
    getString(name: string): string;
    
    /**
     * Returns the type of the defined item in the global variable space as a string
     */
    getType(name: string): string;

    /**
     * Put a Boolean into the global variable space
     */
    putBoolean(name: string, b: boolean): boolean;

    /**
     * Put a Double into the global variable space
     */
    putDouble(name: string, d: number): number;
    
    /**
     * Put a Float into the global variable space
     */
    putFloat(name: string, f: number): number;
    
    /**
     * Put a Integer into the global variable space
     */
    putInt(name: string, i: number): number;
    
    /**
     * Put a Object into the global variable space
     */
    putObject(name: string, o: object | Java.JObject): Object | Java.JObject;
    
    /**
     * Put a String into the global variable space
     */
    putString(name: string, str: string): string;

    /**
     * Removes a key from the global varaible space
     */
    remove(key: string): void;
}

export default FGlobalVars;
