import * as Java from "../java";

declare abstract class MethodWrapper<T,U,R> extends Java.JObject {
    // declare abstract class MethodWrapper<T,U,R> extends Java.JObject implements Java.Consumer<T>, Java.BiConsumer<T,U>, Java.Function<T,R>, Java.BiFunction<T,U,R>, Java.Predicate<T>, Java.BiPredicate<T,U>, Java.Runnable, Java.Supplier<R> {
       
    /**
     * Makes Function and BiFunction work together
     */
    andThen<V>(after: Java.Function<R,V>): MethodWrapper<T,U,V>;

    /**
     * Makes Predicate and BiPredicate work toegether
     */
    negate(): MethodWrapper<T,U,R>;
}

export default MethodWrapper;
