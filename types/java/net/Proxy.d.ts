import JObject from "../lang/Object";
import SocketAddress from "./SocketAddress";

declare namespace Proxy {
    enum Type {
        DIRECT,
        HTTP,
        SOCKS,
    }
}

declare class Proxy extends JObject {
    constructor(type: Proxy.Type, sa: SocketAddress);

    NO_PROXY: Proxy;

    address(): SocketAddress;
    equals(obj: JObject): boolean;
    hashCode(): number;
    toString(): string;
    type(): Proxy.Type;
}

export default Proxy;
