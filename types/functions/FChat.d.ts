import Functions from "../extensionBase/Functions";
import TextHelper from "../helpers/TextHelper";

declare class FChat extends Functions {
    constructor(libName: string);
    constructor(libName: string, excludeLangauges: string[]);

    /**
     * Display the smaller title that is above the actionbar
     */
    actionbar(text: string, tinted: boolean): void;

    /**
     * Creates a TextHelper for use where you need one and not a string
     */
    createTextHelperFromJson(json: string): TextHelper;

    /**
     * Creates a TextHelper for use where you need one and not a string
     */
    createTextHelperFromString(content: string): TextHelper;

    /**
     * Log to player chat
     */
    log(message: string): void;

    /**
     * Say to server as player
     */
    say(message: string): void;

    /**
     * Display a Title to the player
     */
    title(title: string, subtitle: string, fadeIn: number, remain: number, fadeOut: number): void;

    /**
     * Display a toast
     */
    toast(title: string, desc: string): void;
}

export default FChat;
