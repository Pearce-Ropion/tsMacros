import JObject from "../lang/Object";
import Closeable from "./Closeable";

declare class InputStream extends JObject implements Closeable {
    constructor();

    available(): number;
    close(): void;
    mark(readlimit: number): void;
    markSupported(): boolean;
    read(): number;
    read(b: ArrayBuffer): number;
    read(b: ArrayBuffer, off: number, len: number): number;
    reset(): void;
    skip(n: bigint): bigint;
}

export default InputStream;
