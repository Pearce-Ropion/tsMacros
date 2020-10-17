import Class from "./Class";
import JObject from "./Object";

declare class ClassLoader extends JObject {
    protected constructor();
    protected constructor(parent: ClassLoader);

    clearAssertionStatus(): void;

    /** @deprecated */
    protected defineClass<C>(b: ArrayBuffer, off: number, len: number): Class<C>;
    protected defineClass<C>(name: string, b: ArrayBuffer, off: number, len: number): Class<C>;
    protected defineClass<C>(name: string, b: ArrayBuffer, off: number, len: number, )
}