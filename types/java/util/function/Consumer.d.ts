declare interface Consumer<T> {
    accept(t: T): void;
    andThen(after: Consumer<T>): Consumer<T>;
}

export default Consumer;