export declare class JObject {
    clone(): JObject;
    equals(obj: JObject): boolean;
    finalize(): void;
    getClass(): this;
    hashCode(): number;
    notify(): void;
    notifyAll(): void;
    toString(): string;
    wait(timeout?: bigint, nanos?: number): void;
}

export interface Runnable {
    run(): void;
}

export interface BiConsumer<T,U> {
    accept(t: T, u: U): void;
    andThen(after: BiConsumer<T,U>): BiConsumer<T,U>
}

export interface BiFunction<T,U,R> {
    apply(t: T, u: U): R;
    andThen<V>(after: Function<T,V>): BiFunction<T,U,V>;
}

export interface BiPredicate<T,U> {
    and(other: BiPredicate<T,U>): BiPredicate<T,U>
    negate(): BiPredicate<T,U>
    or(other: BiPredicate<T,U>): BiPredicate<T,U>
    test(t: T, u: U): boolean;
}

export interface Consumer<T> {
    accept(t: T): void;
    andThen(after: Consumer<T>): Consumer<T>;
}

export interface Function<T,R> {
    andThen<V>(after: Function<R,V>): Function<T,V>;
    apply(t: T): R;
    compose<V>(before: Function<V,T>): Function<V,R>;
    identity<I>(): Function<I,I>;
}

export interface Predicate<T> {
    and(other: Predicate<T>): Predicate<T>;
    isEqual<I>(targetRef: JObject): Predicate<I>;
    negate(): Predicate<T>;
    or(other: Predicate<T>): Predicate<T>;
    test(t: T): boolean;
}

export interface Supplier<T> {
    get(): T;
}

export declare class Thread extends JObject implements Runnable {
    constructor();
    constructor(target: Runnable);
    constructor(target: Runnable, name: string);
    constructor(name: string);
    constructor(group: string);

    run(): void;
}

export declare namespace Thread {
    interface UncaughtExceptionHandler {
        // uncaughtException(t: Thread, e: )
    }
}

export interface Serializable {};

export declare class StackTraceElement extends JObject implements Serializable {
    constructor(declaringClass: string, methodName: string, fileName: string, lineNumber: number);

    equals(obj: JObject): boolean;
    getClassName(): string;
    getFileName(): string;
    getLineNumer(): number;
    getMethodName(): string;
    hashCode(): number;
    isNativeMethod(): boolean;
    toString(): string;
}

export declare class Throwable extends JObject implements Serializable {
    constructor();
    constructor(message: string);
    constructor(message: string, cause: Throwable);
    constructor(message: string, cause: Throwable, enableSuppression: boolean, writeStackTrace: boolean);
    constructor(cause: Throwable);

    addSuppressed(exception: Throwable): void;
    fillInStackTrace(): Throwable;
    getCause(): Throwable;
    getLocalizedMessage(): string;
    getMessage(): string;
    getStackTrace(): StackTraceElement[];
    getSuppressed(): Throwable[];
    initCause(cause: Throwable): Throwable;
    printStackTrace(): void;
    printStackTrace(s: P): void;

}

// export declare class ThreadGroup
