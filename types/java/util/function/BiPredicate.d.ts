declare interface BiPredicate<T,U> {
    and(other: BiPredicate<T,U>): BiPredicate<T,U>
    negate(): BiPredicate<T,U>
    or(other: BiPredicate<T,U>): BiPredicate<T,U>
    test(t: T, u: U): boolean;
}

export default BiPredicate;
