import * as Java from "../java";

import MethodWrapper from "./MethodWrapper";

interface IFConsumer<T,U,V> {
    autoWrap(c: V): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;
    autoWrapAsync(c: V): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toAsyncBiConsumer(c: T): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toAsyncConsumer(c: U): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toBiConsumer(c: T): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;

    /**
     * @deprecated
     */
    toConsumer(c: U): MethodWrapper<Java.JObject, Java.JObject, Java.JObject>;
}

export default IFConsumer;
