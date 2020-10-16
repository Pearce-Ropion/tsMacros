import * as Java from "../java";

import Functions from "../extensionBase/Functions";
import IFConsumer from "../extensionBase/IFConsumer";
import MethodWrapper from "../extensionBase/MethodWrapper";

declare class FConsumer extends Functions implements IFConsumer<Java.Function<Java.JObject[], Java.JObject>, Java.Function<Java.JObject[], Java.JObject>, Java.Function<Java.JObject[], Java.JObject>> {
    constructor(libName: string, excludeLanguages: string[]);

    autoWrap(c: Java.Function<Java.JObject[], Java.JObject>): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;
    autoWrapAsync(c: Java.Function<Java.JObject[], Java.JObject>): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toAsyncBiConsumer(c: Java.Function<Java.JObject[], Java.JObject>): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toAsyncConsumer(c: Java.Function<Java.JObject[], Java.JObject>): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toBiConsumer(c: Java.Function<Java.JObject[], Java.JObject>): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toConsumer(c: Java.Function<Java.JObject[], Java.JObject>): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;
}

export default FConsumer;
