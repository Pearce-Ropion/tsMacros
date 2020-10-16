import Functions from "../extensionBase/Functions";

declare class FKeyBind extends Functions {
    constructor(libName: string, excludeLanguages: string[]);

    pressedKeys: Set<string>;

    getKeyBindings(): Map<string, string>;
    getPressedKeys(): string[];

    /**
     * Set a key-state for a key
     */
    key(keyName: string, keyState: boolean): void;

    /**
     * Set a key-state using the name of the keybind rather than the name of the key
     */
    keyBind(keyBind: string, keyState: boolean): void;

    /**
     * Sets a minecraft keybind to the specified key
     */
    setKeyBind(bind: string, key: string): void;
}

export default FKeyBind;
