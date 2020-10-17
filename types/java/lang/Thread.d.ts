import JObject from "./Object";
import Runnable from "./Runnable";

export declare namespace Thread {
    interface UncaughtExceptionHandler {
        // uncaughtException(t: Thread, e: )
    }
}

declare class Thread extends JObject implements Runnable {
    constructor();
    constructor(target: Runnable);
    constructor(target: Runnable, name: string);
    constructor(name: string);
    constructor(group: string);

    run(): void;
}

export default Thread;
