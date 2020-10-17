declare interface BiConsumer<T,U> {
    accept(t: T, u: U): void;
    andThen(after: BiConsumer<T,U>): BiConsumer<T,U>
}

export default BiConsumer;