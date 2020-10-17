import JObject from "../lang/Object";
import Serializable from "../io/Serializable";

declare class URL extends JObject implements Serializable {
    constructor(spec: string);
    constructor(protocol: string, host: string, port: number, file: string);
    constructor(protocol: string, host: string, port: number, file: string, handler: URLStreamHandler);
    constructor(protocol: string, host: string, file: string);
    constructor(content: URL, spec: string);
    constructor(context: URL, spec: string, handler: URLStreamHandler);

    equals(obj: JObject): boolean;
    getAuthority(): string;
    getContent(): JObject;
    // getContent(classes: Class[]): JObject;
    getDefaultPort(): number;
    getFile(): string;
    getHost(): string;
    getPath(): string;
    getPort(): number;
    getProtocol(): string;
    getQuery(): string;
    getRef(): string;
    getUserInfo(): string;
    hashCode(): number;
    openConnection(): URLConnection;
    openConnection(proxy: Proxy): URLConnection;
    openStream(): InputStream;
    sameFile(): boolean;
    setURLStreamHandlerFactory(fac: URLStreamHandlerFactory): void;
    toExternalForm(): string;
    toString(): string;
    toURI(): URI;
}