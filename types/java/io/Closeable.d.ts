import AutoCloseable from "../lang/AutoCloseable";

declare interface Closeable extends AutoCloseable {
    close(): void;
}

export default Closeable;
