declare interface Function<T,R> {
    andThen<V>(after: Function<R,V>): Function<T,V>;
    apply(t: T): R;
    compose<V>(before: Function<V,T>): Function<V,R>;
    identity<I>(): Function<I,I>;
}

export default Function;