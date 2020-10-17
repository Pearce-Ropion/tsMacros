declare interface Enumeration<E> {
    hasMoreElements(): boolean;
    nextElement(): E;
}

export default Enumeration;
