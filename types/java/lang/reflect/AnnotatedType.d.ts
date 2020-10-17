import AnnotatedElement from "./AnnotatedElement";
import Type from "./Type";

declare interface AnnotatedType extends AnnotatedElement {
    getType(): Type;
}

export default AnnotatedType;
