import JObject from "./Object";
import Serializable from "../io/Serializable";
import AnnotatedElement from "./reflect/AnnotatedElement"


declare class Class<T> extends JObject implements Serializable, GenericDeclaration, TypeError, AnnotatedElement {
    asSubclass<U>(clazz: Class<U>): Class<U>;
    cast(obj: JObject): T;
    desiredAssertionStatus(): boolean;
    forName<C>(className: string): Class<C>;
    forName(name: string, initialize: boolean; loader)
}

export default Class;
