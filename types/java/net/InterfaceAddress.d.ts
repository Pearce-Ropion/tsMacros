import JObject from "../lang/Object";
import InetAddress from "./InetAddress";

declare class InterfaceAddress extends JObject {
    constructor();

    equals(obj: JObject): boolean;
    getAddress(): InetAddress;
    getBroadcast(): InetAddress;
    getNetworkPrefixLength(): number;
    hashCode(): number;
    toString(): string;
}

export default InterfaceAddress;
