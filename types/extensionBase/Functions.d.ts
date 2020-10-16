import * as Java from "../java";

declare class Functions extends Java.JObject {
    constructor(libName: string, excludeLangauges?: string[]);

    libName: string;
    excludeLanguages: string[];
}

export default Functions;
