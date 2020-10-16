import * as Java from "../java";

declare class TextHelper extends Java.JObject {
    constructor(json: string);

    getJson(): string;
    getRaw(): string;
    getString(): string;

    toJson(): string;
    toString(): string;

    replaceFromJson(json: string): TextHelper;
    replaceFromString(content: string): TextHelper;
}

export default TextHelper;
