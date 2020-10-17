import JObject from "../lang/Object";
import Serializable from "../io/Serializable";

declare class InetAddress extends JObject implements Serializable {
    equals(obj: JObject): boolean;
    getAddress(): ArrayBuffer;
    static getAllByName(host: string): InetAddress[];
    static getByAddress(addr: ArrayBuffer): InetAddress;
    static getByAddress(host: string, addr: ArrayBuffer): InetAddress;
    static getByName(host: string): InetAddress;
    getCanonicalHostName(): string;
    getHostAddress(): string;
    getHostName(): string;
    static getLocalHost(): InetAddress;
    static getLoopbackAddress(): InetAddress;
    hashCode(): number;
    isAnyLocalAddress(): boolean;
    isLinkLocalAddress(): boolean;
    isLoopbackAddress(): boolean;
    isMCGlobal(): boolean;
    isMCLinkLocal(): boolean;
    isMCNodeLocal(): boolean;
    isMCOrgLocal(): boolean;
    isMCSiteLocal(): boolean;
    isMulticastAddress(): boolean;
    isReachable(timeout: number): boolean;
    isReachable(netif: NetworkInterface, ttl: number, timeout: number): boolean;
    isSiteLocalAddress(): boolean;
    toString(): string;
}

export default InetAddress;
