import JObject from "../lang/Object";
import InetAddress from "./InetAddress";
import Enumeration from "../util/Enumeration";
import InterfaceAddress from "./InterfaceAddress";

declare class NetworkInterface extends JObject {
    constructor();

    equals(obj: JObject): boolean;
    static getByIndex(index: number): NetworkInterface;
    static getByInetAddress(addr: InetAddress): NetworkInterface;
    static getByName(name: string): NetworkInterface;
    getDisplayName(): string;
    getHardwareAddress(): ArrayBuffer;
    getIndex(): number;
    getInetAddresses(): Enumeration<InetAddress>;
    getInterfaceAddresses(): InterfaceAddress[];
    getMTU(): number;
    getName(): string;
    static getNetworkInterface(): Enumeration<NetworkInterface>;
    getParent(): NetworkInterface;
    getSubInterfaces(): Enumeration<NetworkInterface>;
    hashCode(): number;
    isLoopback(): boolean;
    isPointToPoint(): boolean;
    isUp(): boolean;
    isVirtual(): boolean;
    supportsMulticast(): boolean;
    toString(): string;
}

export default NetworkInterface;
