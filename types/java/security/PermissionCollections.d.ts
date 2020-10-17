import Serializable from "../io/Serializable";
import JObject from "../lang/Object";
import Permission from "./Permission";
import Enumeration from "../util/Enumeration";

declare class PermissionCollection extends JObject implements Serializable {
    constructor();

    add(permission: Permission): void;
    elements(): Enumeration<Permission>
    implies(permission: Permission): boolean;
    isReadOnly(): boolean;
    setReadOnly(): void;
    toString(): string;
}

export default PermissionCollection;
