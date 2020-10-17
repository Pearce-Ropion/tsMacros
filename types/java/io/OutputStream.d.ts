import JObject from "../lang/Object";
import Closeable from "./Closeable";
import Flushable from "./Flushable";

declare abstract class OutputStream extends JObject implements Closeable, Flushable {
    constructor();

    close(): void;
    flush(): void;
    write(b: ArrayBuffer): void;
    write(b: ArrayBuffer, off: number, len: number): void;
    write(b: number): void;
}

export default OutputStream;
