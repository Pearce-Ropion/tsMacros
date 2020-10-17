import Annotation from "../annotation/Annotation";
import Class from "../Class";

declare interface AnnotatedElement {
    getAnnotatedClass<T extends Annotation>(annotationClass: Class<T>): T;
    getAnnotations(): Annotation[];
    getAnnotationsByType<T extends Annotation= Annotation>(annotationClass: Class<T>): T[];
    getDeclaredAnnotation<T extends Annotation= Annotation>(annotationClass: Class<T>): T;
    getDeclaredAnnotations(): Annotation[];
    getDeclaredAnnotationsByType<T extends Annotation= Annotation>(annotationClass: Class<T>): T[];
    isAnnotationPresent<T extends Annotation>(annotationClass: Class<T>): boolean;
}

export default AnnotatedElement;
