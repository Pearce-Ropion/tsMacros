import Consumer from "./function/Consumer";

declare interface Spliterator<T> {
    CONCURRENT: number;
    DISTINT: number;
    IMMUTABLE: number;
    NONNULL: number;
    ORDERED: number;
    SIZED: number;
    SORTED: number;
    SUBSIZED: number;

    characteristics(): number;
    estimatedSize(): bigint;
    forEachRemaining(action: Consumer<T>): void;
    getComparator(): Compa
}

export default Spliterator;
