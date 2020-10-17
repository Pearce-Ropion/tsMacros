import JObject from "../../lang/Object";

declare interface Predicate<T> {
    and(other: Predicate<T>): Predicate<T>;
    isEqual<I>(targetRef: JObject): Predicate<I>;
    negate(): Predicate<T>;
    or(other: Predicate<T>): Predicate<T>;
    test(t: T): boolean;
}

export default Predicate;
