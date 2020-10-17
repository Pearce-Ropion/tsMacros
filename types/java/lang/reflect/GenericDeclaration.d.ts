import AnnotatedElement from "./AnnotatedElement";
import TypeVariable from "./TypeVariable";

declare interface GenericDeclaration<D> extends AnnotatedElement {
    getTypeParameters(): TypeVariable<D>[];
}

export default GenericDeclaration;
