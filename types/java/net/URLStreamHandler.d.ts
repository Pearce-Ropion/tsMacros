import JObject from "../lang/Object";
import InetAddress from "./InetAddress";
import Proxy from "./Proxy";
import URLConnection from "./URLConnection";

declare abstract class URLStreamHandler extends JObject {
    constructor();

    protected equals(u1: URL, u2: URL): boolean;
    protected getDefaultPort(): number;
    protected getHostAddress(u: URL): InetAddress;
    protected hashCode(u: URL): number;
    protected hostsEqual(u1: URL, u2: URL): boolean;
    protected openConnection(u: URL): URLConnection;
    protected openConnection(u: URL, p: Proxy): URLConnection;
    protected parseURL(u: URL, spec: string, start: number, limit: number): void;
    protected sameFile(u1: URL, u2: URL);
 
    /** @deprecated */
    protected setURL(u: URL, protocol: string, host: string, port: number, file: string, ref: string): void;
    protected setURK(u: URL, protocol: string, host: string, port: number, authority: string, userInfo: string, path: string, query: string, ref: string): void;
    protected toExternalForm(u: URL): string;
}

export default URLStreamHandler;
