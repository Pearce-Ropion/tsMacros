import Class from "../Class";

declare interface Annotation {
    annotationType<T extends Annotation>(): Class<T>;
}

export default Annotation;
