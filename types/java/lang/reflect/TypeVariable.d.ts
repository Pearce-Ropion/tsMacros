import AnnotatedType from "./AnnotatedType";
import { GenericDeclaration } from "./GenericDeclaration";
import Type from "./Type";

declare interface TypeVariable<D extends GenericDeclaration> {
    getAnnotatedbounds(): AnnotatedType[];
    getBounds(): Type[];
    getGenericDeclaration(): D;
    getName(): string;
}

export default TypeVariable;
