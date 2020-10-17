import JObject from "../lang/Object";
import Permission from "../security/Permission";
import FileNameMap from "./FileNameMap";
import InputStream from "../io/InputStream";
import OutputStream from "../io/OutputStream";
import ContentHandlerFactory from "./ContentHandlerFactory";

declare abstract class URLConnection extends JObject {
    protected constructor(url: URL);

    allowUserInteraction: boolean;
    connected: boolean;
    doInput: boolean;
    doOutput: boolean;
    ifModifiedSince: bigint;
    url: URL;
    useCaches: boolean;

    addRequestProperty(key: string, value: string): void;
    abstract connect(): void;
    getAllowUserInteraction(): boolean;
    getConnectTimeout(): number;
    getContent(): JObject;
    getContentEncoding(): string;
    getContentLength(): number;
    getContentLengthLong(): bigint;
    getContentType(): string;
    getDate(): bigint;
    getDefaultAllowUserInteraction(): boolean;

    /** @deprecated */
    getDefaultRequestProperty(key: string): string
    getDefaultUseCaches(): boolean;
    getDoInput(): boolean;
    getDoOutput(): boolean;
    getExpiration(): bigint;
    static getFileNameMap(): FileNameMap;
    getHeaderField(n: number): string;
    getHeaderField(name: string): string;
    getHeaderFieldDate(name: string, Default: bigint): bigint;
    getHeaderFieldInt(name: string, Default: number): number;
    getHeaderFieldKey(n: number): string;
    getHeaderFieldLong(name: string, Default: bigint): bigint;
    getHeaderFields(): Map<string,string[]>;
    getIfModifierSince(): bigint;
    getInputStream(): InputStream;
    getLastMofied(): bigint;
    getOutputStream(): OutputStream;
    getPermission(): Permission;
    getReadTimeout(): number;
    getRequestProperties(): Map<string, string[]>;
    getRequestProperty(key: string): string;
    getURL(): URL;
    getUseCaches(): boolean;
    static guessContentTypeFromName(fname: string);
    static guessContentTypeFromStream(is: InputStream): string;
    setAllowUserInteraction(allowUserInteraction: boolean): void;
    setConnectTimeout(timeout: number): void;
    setContentHandlerFactory(fac: ContentHandlerFactory): void;
    static setDefaultAllowUserInteraction(defaultAllowUserInteraction: boolean): void;

    /** @deprecated */
    static setDefaultRequestProperty(key: string, value: string): void;
    static setDefaultUseCaches(defaultUseCaches: boolean): void;
    setDoInput(doInput: boolean): void;
    setDoOutput(doOutput: boolean): void;
    setFileNameMap(map: FileNameMap): void;
    static setIfModifiedSince(ifModifiedSince: bigint): void;
    setReadTimeout(timeout: number): void;
    setRequestProperty(key: string, value: string): void;
    toString(): string;
}

export default URLConnection;
