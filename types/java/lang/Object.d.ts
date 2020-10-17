declare class Object {
    clone(): Object;
    equals(obj: Object): boolean;
    finalize(): void;
    getClass(): this;
    hashCode(): number;
    notify(): void;
    notifyAll(): void;
    toString(): string;
    wait(timeout?: bigint, nanos?: number): void;
}

export default Object;
