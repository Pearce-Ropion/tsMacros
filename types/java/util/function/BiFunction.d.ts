import Function from "./Function";

declare interface BiFunction<T,U,R> {
    apply(t: T, u: U): R;
    andThen<V>(after: Function<T,V>): BiFunction<T,U,V>;
}

export default BiFunction;