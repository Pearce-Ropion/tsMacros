export interface Supplier<T> {
    get(): T;
}



export 

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

export interface Comparable<T> {
    compareTo(o: T): number;
}



export 

export 

export 

export 

export 

export 

export 

export declare interface URLStreamHandlerFactory {
    createURLStreamHandler(protocol: string): URLStreamHandler;
}

export 

export declare class URI extends JObject implements Serializable, Comparable<URI> {
    constructor(str: string);
    constructor(scheme: string, ssp: string, fragment: string);
    constructor(scheme: string, userInfo: string, host: string, port: number, path: string, query: string, fragment: string);
    constructor(scheme: string, host: string, path: string, fragment: string);
    constructor(scheme: string, authority: string, path: string, query: string, fragment: string);

    compareTo(that: URI): number;
    create(str: string): URI;
    equals(ob: JObject): boolean;
    getAuthority(): string;
    getFragment(): string;
    getHost(): string;
    getPath(): string;
    getPort(): number;
    getQuery(): string;
    getRawAuthority(): string;
    getRawFragment(): string;
    getRawPath(): string;
    getRawSchemeSpecificPart(): string;
    getRawUserInfo(): string;
    hashCode(): number;
    isAbsolute(): boolean;
    isOpaque(): boolean;
    normalize(): URI;
    parseServerAuthority(): URI;
    relativize(uri: URI): URI;
    resolve(str: string): URI;
    resolve(uri: URI): URI;
    toASCIIString(): string;
    toString(): string;
    toURL(): URL;
}

export declare interface FilenameFilter {
    accept(dir: File, name: string): boolean;
}

export declare interface FileFilter {
    accept(pathname: File): boolean;
}





export declare interface Iterator<E> {
    forEachRemaining(action: Consumer<E>): void;
    hasNext(): boolean;
    next(): E;
    remove(): void;
}

export declare interface Iterable<T> {
    forEach(action: Consumer<T>): void;
    iterator(): It
}

// export declare interface Path extends Comparable<Path>, Iterable<Path>,

export declare class File extends JObject implements Serializable, Comparable<File> {
    constructor(parent: File, child: string);
    constructor(pathname: string);
    constructor(parent: string, child: string);
    constructor(uri: URI);

    pathSeparator: string;
    pathSeparatorChat: string;
    separator: string;
    separatorChar: string;

    canExecute(): boolean;
    canRead(): boolean;
    canWrite(): boolean;
    compareTo(pathname: File): number;
    createNewFile(): boolean;
    createTempFile(prefix: string, suffix: string): File;
    createTempFile(prefix: string, suffix: string, directory: File): File;
    delete(): boolean;
    deleteOnExit(): void;
    equals(obj: JObject): boolean;
    exists(): boolean;
    getAbsoluteFile(): File;
    getAbsolutePath(): string;
    getCanonicalFile(): File;
    getCanonicalPath(): string;
    getFreeSpace(): bigint;
    getName(): string;
    getParent(): string;
    getParentFile(): File;
    getPath(): string;
    getTotalSpace(): bigint;
    getUsableSpace(): bigint;
    hashCode(): number;
    isAbsolue(): boolean;
    isDirectory(): boolean;
    isFile(): boolean;
    isHidden(): boolean;
    lastModified(): bigint;
    length(): bigint;
    list(): string[];
    list(filter: FilenameFilter): string[];
    listFiles(): File[];
    listFiles(filter: FileFilter): File[];
    listFiles(filter: FilenameFilter): File[];
    listRoots(): File[];
    mkdir(): boolean;
    mkdirs(): boolean;
    renameTo(dest: File): boolean;
    setExecutable(executable: boolean): boolean;
    setExecutable(executable: boolean, ownerOnly: boolean): boolean;
    setLastModified(time: bigint): boolean;
    setReadable(readable: boolean): boolean;
    setReadable(readable: boolean, ownerOnly: boolean): boolean;
    setReadOnly(): boolean;
    setWritable(writable: boolean): boolean;
    // toPath(): Path;
    toString(): string;
    toURI(): URI;

    /** @deprecated */
    toURL(): URL;
}

// export declare class ThreadGroup

export declare class Class 